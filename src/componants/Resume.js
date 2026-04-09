import React from 'react';
import myResume from '../pdf/Mohamed_Elhelw.pdf';

export default function Resume() {
  return (
    <section style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: '48px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <p
              className="animate-fade-in"
              style={{ fontSize: '13px', color: '#22d3ee', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 16px 0' }}
            >
              Experience
            </p>
            <h2
              className="animate-fade-in-up"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', margin: 0, letterSpacing: '-1.5px' }}
            >
              My <span className="gradient-text">Resume</span>
            </h2>
          </div>

          <a
            href={myResume}
            download
            className="animate-fade-in"
            style={{
              background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
              border: 'none',
              borderRadius: '999px',
              padding: '12px 28px',
              fontSize: '14px',
              fontWeight: '700',
              color: '#000',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'opacity 0.2s ease',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <i className="fa-solid fa-download" />
            Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <div
          className="animate-fade-in-up glass"
          style={{
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <iframe
            src={myResume}
            title="Mohamed Elhelw Resume"
            className="resume-iframe"
            style={{
              width: '100%',
              height: '800px',
              border: 'none',
              display: 'block',
            }}
          />
        </div>

      </div>
    </section>
  );
}
