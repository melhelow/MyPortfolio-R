import React from 'react';

const socials = [
  { icon: 'fa-brands fa-github',      href: 'https://github.com/melhelow',                                     label: 'GitHub' },
  { icon: 'fa-brands fa-linkedin-in', href: 'https://www.linkedin.com/in/mohamed-elhelw-76a888271/',           label: 'LinkedIn' },
  { icon: 'fa-solid fa-at',           href: 'mailto:melhelow@hotmail.com',                                     label: 'Email' },
  { icon: 'fa-sharp fa-solid fa-phone', href: 'tel:+17085809783',                                              label: 'Phone' },
];

export default function Icons() {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith('http') ? '_blank' : undefined}
          rel="noreferrer"
          title={s.label}
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.55)',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#22d3ee';
            e.currentTarget.style.borderColor = 'rgba(34,211,238,0.4)';
            e.currentTarget.style.background = 'rgba(34,211,238,0.08)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <i className={s.icon} />
        </a>
      ))}
    </div>
  );
}
