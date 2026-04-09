import React, { useState, useEffect } from 'react';

const NAV_ITEMS = ['About', 'Work', 'Resume', 'Contact'];

export default function Navbar({ currentPage, setCurrentPage }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navWrap = {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 9999,
    width: 'calc(100% - 40px)',
    maxWidth: '860px',
  };

  const pill = {
    background: scrolled
      ? 'rgba(8, 8, 8, 0.96)'
      : 'rgba(10, 10, 10, 0.75)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    border: '1px solid rgba(255,255,255,0.09)',
    borderRadius: '999px',
    padding: '10px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: scrolled
      ? '0 8px 40px rgba(0,0,0,0.6)'
      : '0 4px 24px rgba(0,0,0,0.4)',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={navWrap}>
      <div style={pill}>
        {/* ── Logo ── */}
        <button
          onClick={() => setCurrentPage('About')}
          style={{
            background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
            border: 'none',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            fontSize: '13px',
            color: '#000',
            cursor: 'pointer',
            flexShrink: 0,
            letterSpacing: '-0.5px',
          }}
        >
          ME
        </button>

        {/* ── Desktop links ── */}
        <div
          style={{ gap: '2px', alignItems: 'center' }}
          className="hidden sm:flex"
        >
          {NAV_ITEMS.map((item) => {
            const active = currentPage === item;
            return (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                style={{
                  background: active ? 'rgba(34,211,238,0.12)' : 'transparent',
                  border: active
                    ? '1px solid rgba(34,211,238,0.35)'
                    : '1px solid transparent',
                  borderRadius: '999px',
                  padding: '7px 22px',
                  fontSize: '14px',
                  fontWeight: active ? '600' : '400',
                  color: active ? '#22d3ee' : 'rgba(255,255,255,0.65)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.65)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* ── CTA button ── */}
        <button
          onClick={() => setCurrentPage('Contact')}
          style={{
            background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
            border: 'none',
            borderRadius: '999px',
            padding: '8px 20px',
            fontSize: '13px',
            fontWeight: '600',
            color: '#000',
            cursor: 'pointer',
            letterSpacing: '0.02em',
            transition: 'opacity 0.2s ease',
          }}
          className="hidden sm:block"
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Hire Me
        </button>

        {/* ── Hamburger (mobile) ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '22px',
            lineHeight: 1,
            padding: '4px 8px',
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div
          className="sm:hidden"
          style={{
            marginTop: '8px',
            background: 'rgba(10,10,10,0.97)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.09)',
            borderRadius: '16px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          {NAV_ITEMS.map((item) => {
            const active = currentPage === item;
            return (
              <button
                key={item}
                onClick={() => { setCurrentPage(item); setMenuOpen(false); }}
                style={{
                  background: active ? 'rgba(34,211,238,0.12)' : 'transparent',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '12px 18px',
                  fontSize: '15px',
                  fontWeight: active ? '600' : '400',
                  color: active ? '#22d3ee' : 'rgba(255,255,255,0.7)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  transition: 'all 0.2s ease',
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
