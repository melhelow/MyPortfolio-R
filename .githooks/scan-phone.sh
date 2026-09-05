#!/bin/sh
# Blocks personal phone numbers and tel: links from entering this repo.
#
# Deliberately shape-based, not value-based: the number this repo was scrubbed
# of is never written down here, so the guard cannot re-leak the thing it
# guards. It rejects any tel: link and any North-American-shaped phone number,
# and ignores obvious placeholders -- fewer than three distinct digits, e.g.
# "+1 (000) 000-0000".
#
# PDFs are scanned through their extracted text, because the leak this guard
# exists for hid inside a compressed PDF stream where grep cannot reach.
#
# Usage:
#   scan-phone.sh                 scan every tracked file
#   scan-phone.sh FILE...         scan the named files
#   scan-phone.sh --stdin         scan newline-delimited paths on stdin
# Exit: 0 clean, 1 something matched.

set -u

TEL_RE='tel:[[:space:]]*[+(0-9][^"`)<>[:space:]]*'
SEP_RE='(\+?1[-. ])?\(?[0-9]{3}\)?[-. ][0-9]{3}[-. ][0-9]{4}'
BARE_RE='(^|[^0-9A-Za-z_-])(\+?1)?[2-9][0-9]{2}[2-9][0-9]{6}([^0-9A-Za-z_-]|$)'

HITS=$(mktemp)
trap 'rm -f "$HITS"' EXIT

# A real number has at least three distinct digits; 000-000-0000 does not.
is_placeholder() {
  [ "$(printf '%s' "$1" | tr -cd '0-9' | fold -w1 | sort -u | wc -l)" -lt 3 ]
}

scan_text() { # $1 = label, text on stdin
  label=$1
  buf=$(cat)
  for kind in TEL SEP BARE; do
    case $kind in
      TEL) re=$TEL_RE ;;
      SEP) re=$SEP_RE ;;
      BARE) re=$BARE_RE ;;
    esac
    printf '%s\n' "$buf" | grep -oE "$re" 2>/dev/null | sort -u | while IFS= read -r m; do
      # A tel: link is never legitimate in this repo, whatever number follows
      # it, so the placeholder exemption applies only to the digit patterns.
      if [ "$kind" = TEL ] || ! is_placeholder "$m"; then
        printf '  %s: [%s] %s\n' "$label" "$kind" "$m" >> "$HITS"
      fi
    done
  done
}

scan_file() {
  f=$1
  [ -f "$f" ] || return 0
  case $f in
    *.pdf|*.PDF)
      if command -v pdftotext >/dev/null 2>&1; then
        pdftotext -q "$f" - 2>/dev/null | scan_text "$f (pdf text)"
      else
        printf 'NOTE: %s not scanned (pdftotext not installed)\n' "$f" >&2
      fi
      ;;
    *)
      grep -Iq . "$f" 2>/dev/null || return 0   # -I: skip binaries (images etc)
      scan_text "$f" < "$f"
      ;;
  esac
}

scan_list() { while IFS= read -r f; do [ -n "$f" ] && scan_file "$f"; done; }

if [ "$#" -gt 0 ] && [ "$1" = "--stdin" ]; then
  scan_list                          # space-safe: one path per line on stdin
elif [ "$#" -gt 0 ]; then
  printf '%s\n' "$@" | scan_list
else
  git ls-files | scan_list
fi

if [ -s "$HITS" ]; then
  echo "BLOCKED: phone number or tel: link detected"
  cat "$HITS"
  echo
  echo "Remove it. Placeholders need fewer than three distinct digits, e.g. +1 (000) 000-0000."
  exit 1
fi
exit 0
