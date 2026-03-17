import React from 'react';
import Icons from './Icons';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: '#0a0a0a',
        padding: '32px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '12px',
              color: '#000',
            }}
          >
            ME
          </div>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', fontWeight: '500' }}>
            Mohamed Elhelw · Full-Stack Developer
          </span>
        </div>

        {/* Social icons */}
        <Icons />

        {/* Copyright */}
        <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
          © {new Date().getFullYear()} Mohamed Elhelw
        </p>
      </div>
    </footer>
  );
}
