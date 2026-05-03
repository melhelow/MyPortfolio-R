import React from 'react';
import Form from './Form';

const contactInfo = [
  {
    icon: 'fa-solid fa-at',
    label: 'Email',
    value: 'melhelw558@gmail.com',
    href: 'mailto:melhelw558@gmail.com',
  },
  {
    icon: 'fa-brands fa-github',
    label: 'GitHub',
    value: 'github.com/melhelow',
    href: 'https://github.com/melhelow',
  },
  {
    icon: 'fa-brands fa-linkedin-in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/mohamed-elhelw',
    href: 'https://www.linkedin.com/in/mohamed-elhelw-76a888271/',
  },
];

export default function Contact() {
  return (
    <section style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <p
            className="animate-fade-in"
            style={{ fontSize: '13px', color: '#22d3ee', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 16px 0' }}
          >
            Get In Touch
          </p>
          <h2
            className="animate-fade-in-up"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', margin: '0 0 16px 0', letterSpacing: '-1.5px' }}
          >
            Let's{' '}
            <span className="gradient-text">Connect</span>
          </h2>
          <p
            className="animate-fade-in-up delay-100"
            style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', maxWidth: '480px', lineHeight: '1.7', margin: 0 }}
          >
            Open to full-time roles, freelance projects, and interesting conversations. Let's talk.
          </p>
        </div>

        {/* Two-column layout */}
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)',
            gap: '40px',
            alignItems: 'start',
          }}
        >
          {/* LEFT: contact info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {contactInfo.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className={`animate-fade-in-up card-glow glass delay-${(i + 1) * 100}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '18px 20px',
                  borderRadius: '16px',
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(34,211,238,0.1)',
                    border: '1px solid rgba(34,211,238,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    color: '#22d3ee',
                    flexShrink: 0,
                  }}
                >
                  <i className={item.icon} />
                </div>
                <div>
                  <p style={{ margin: '0 0 2px 0', fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {item.label}
                  </p>
                  <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255,255,255,0.8)', fontWeight: '500' }}>
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Availability badge */}
            <div
              className="animate-fade-in-up glass delay-500"
              style={{
                borderRadius: '16px',
                padding: '20px',
                marginTop: '8px',
                background: 'rgba(34,211,238,0.04)',
                border: '1px solid rgba(34,211,238,0.15)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 8px #4ade80' }} />
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#4ade80' }}>Available for Work</span>
              </div>
              <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6' }}>
                Currently open to full-time roles and freelance opportunities. Based in the Chicago area.
              </p>
            </div>
          </div>

          {/* RIGHT: form */}
          <div
            className="animate-fade-in-up glass delay-200 contact-form-card"
            style={{ borderRadius: '20px', padding: '36px' }}
          >
            <Form />
          </div>
        </div>

      </div>
    </section>
  );
}
