import React from 'react';
import avatar from '../images/whatsapp-2025-06-03-b.jpg';

const skills = [
  'JavaScript', 'React.js', 'Node.js', 'GraphQL',
  'SQL', 'MongoDB', 'Express', 'Git',
  'Ruby on Rails', 'PostgreSQL',
];

export default function About({ setCurrentPage }) {
  return (
    <section style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="section-pad" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* ── Tag ── */}
        <div
          className="animate-fade-in"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(34,211,238,0.08)',
            border: '1px solid rgba(34,211,238,0.25)',
            borderRadius: '999px',
            padding: '6px 16px',
            fontSize: '13px',
            color: '#22d3ee',
            fontWeight: '500',
            marginBottom: '32px',
            letterSpacing: '0.04em',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22d3ee', display: 'inline-block', animation: 'pulseCyan 2s ease-in-out infinite' }} />
          Available for opportunities
        </div>

        {/* ── Two-column hero ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr) auto',
            gap: '64px',
            alignItems: 'center',
          }}
          className="flex-col-mobile"
        >
          {/* LEFT: text */}
          <div>
            <h1
              className="animate-fade-in-up delay-100"
              style={{
                fontSize: 'clamp(40px, 7vw, 76px)',
                fontWeight: '800',
                lineHeight: '1.05',
                margin: '0 0 12px 0',
                letterSpacing: '-2px',
              }}
            >
              Mohamed
            </h1>
            <h1
              className="animate-fade-in-up delay-200 gradient-text"
              style={{
                fontSize: 'clamp(40px, 7vw, 76px)',
                fontWeight: '800',
                lineHeight: '1.05',
                margin: '0 0 28px 0',
                letterSpacing: '-2px',
              }}
            >
              Elhelw
            </h1>

            <p
              className="animate-fade-in-up delay-300"
              style={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'rgba(255,255,255,0.5)',
                margin: '0 0 20px 0',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Full-Stack Developer
            </p>

            <p
              className="animate-fade-in-up delay-400"
              style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: 'rgba(255,255,255,0.6)',
                maxWidth: '520px',
                margin: '0 0 40px 0',
              }}
            >
              Full-stack software developer with hands-on experience building
              production-ready applications using JavaScript, React.js, Node.js,
              and SQL. Northwestern University bootcamp graduate bringing
              12+ years of business operations leadership — combining deep
              technical skills with a systems-thinking mindset.
            </p>

            {/* Skills */}
            <div
              className="animate-fade-in-up delay-500"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '44px' }}
            >
              {skills.map((s) => (
                <span
                  key={s}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    padding: '6px 14px',
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.7)',
                    fontWeight: '500',
                    transition: 'all 0.2s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(34,211,238,0.4)';
                    e.currentTarget.style.color = '#22d3ee';
                    e.currentTarget.style.background = 'rgba(34,211,238,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="cta-buttons" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setCurrentPage('Work')}
                style={{
                  background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '14px 32px',
                  fontSize: '15px',
                  fontWeight: '700',
                  color: '#000',
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                View My Work
              </button>

              <a
                href="/MyPortfolio-R/Mohamed_Elhelw.pdf"
                download
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.18)',
                  borderRadius: '999px',
                  padding: '14px 32px',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: 'rgba(255,255,255,0.8)',
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'border-color 0.2s ease, color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#22d3ee'; e.currentTarget.style.color = '#22d3ee'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT: avatar */}
          <div
            className="animate-float avatar-mobile-first"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div
              style={{
                position: 'relative',
                width: 'clamp(220px, 28vw, 320px)',
                height: 'clamp(220px, 28vw, 320px)',
              }}
            >
              {/* Glow ring */}
              <div
                className="animate-pulse-cyan"
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '50%',
                  background: 'transparent',
                  zIndex: 0,
                }}
              />
              {/* Gradient border */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-3px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #22d3ee, #a78bfa, #22d3ee)',
                  zIndex: 1,
                }}
              />
              <img
                src={avatar}
                alt="Mohamed Elhelw"
                style={{
                  position: 'absolute',
                  inset: '3px',
                  width: 'calc(100% - 6px)',
                  height: 'calc(100% - 6px)',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  zIndex: 2,
                  border: '4px solid #0a0a0a',
                }}
              />
            </div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div
          className="animate-fade-in delay-500 stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '16px',
            overflow: 'hidden',
            marginTop: '80px',
          }}
        >
          {[
            { value: '7+', label: 'Projects Built' },
            { value: '12+', label: 'Years in Operations' },
            { value: '2023', label: 'Bootcamp Graduate' },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                padding: '28px 24px',
                background: 'rgba(10,10,10,0.8)',
                textAlign: 'center',
              }}
            >
              <p
                className="gradient-text"
                style={{ fontSize: '36px', fontWeight: '800', margin: '0 0 6px 0', letterSpacing: '-1px' }}
              >
                {stat.value}
              </p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', margin: 0, letterSpacing: '0.04em' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
