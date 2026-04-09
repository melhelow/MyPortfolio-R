import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '12px',
  padding: '14px 18px',
  fontSize: '15px',
  color: '#fff',
  outline: 'none',
  transition: 'border-color 0.2s ease, background 0.2s ease',
  fontFamily: 'inherit',
};

function Field({ label, error, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{ fontSize: '13px', fontWeight: '600', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em' }}>
        {label}
      </label>
      {children}
      {error && (
        <p style={{ margin: 0, fontSize: '12px', color: '#f87171' }}>{error}</p>
      )}
    </div>
  );
}

export default function Form() {
  const form = useRef();
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [phone,   setPhone]   = useState('');
  const [message, setMessage] = useState('');
  const [status,  setStatus]  = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!name || !email || !phone || !message) return;

    setStatus('sending');
    emailjs.sendForm(
      'service_9e29r6b',
      'template_m153y0i',
      form.current,
      'tazHbsaSG9euaXE3h'
    )
    .then(() => {
      setStatus('success');
      setName(''); setEmail(''); setPhone(''); setMessage('');
      setSubmitted(false);
    })
    .catch(() => setStatus('error'));
  };

  const focusStyle = (e) => {
    e.target.style.borderColor = 'rgba(34,211,238,0.5)';
    e.target.style.background  = 'rgba(34,211,238,0.04)';
  };
  const blurStyle = (e) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
    e.target.style.background  = 'rgba(255,255,255,0.05)';
  };

  return (
    <form ref={form} onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

      <div className="form-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <Field label="Full Name" error={submitted && !name ? 'Required' : ''}>
          <input
            style={inputStyle}
            value={name}
            name="from_name"
            type="text"
            placeholder="Mohamed Elhelw"
            onChange={(e) => setName(e.target.value)}
            onFocus={focusStyle}
            onBlur={blurStyle}
          />
        </Field>
        <Field label="Email" error={submitted && !email ? 'Required' : ''}>
          <input
            style={inputStyle}
            value={email}
            name="from_email"
            type="email"
            placeholder="you@email.com"
            onChange={(e) => setEmail(e.target.value)}
            onFocus={focusStyle}
            onBlur={blurStyle}
          />
        </Field>
      </div>

      <Field label="Phone" error={submitted && !phone ? 'Required' : ''}>
        <input
          style={inputStyle}
          value={phone}
          name="from_phone"
          type="tel"
          placeholder="+1 (000) 000-0000"
          onChange={(e) => setPhone(e.target.value)}
          onFocus={focusStyle}
          onBlur={blurStyle}
        />
      </Field>

      <Field label="Message" error={submitted && !message ? 'Required' : ''}>
        <textarea
          style={{ ...inputStyle, resize: 'vertical', minHeight: '140px', lineHeight: '1.6' }}
          value={message}
          name="message"
          placeholder="Tell me about your project or opportunity..."
          rows={5}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={focusStyle}
          onBlur={blurStyle}
        />
      </Field>

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          background: status === 'sending'
            ? 'rgba(34,211,238,0.4)'
            : 'linear-gradient(135deg, #22d3ee, #a78bfa)',
          border: 'none',
          borderRadius: '12px',
          padding: '15px',
          fontSize: '15px',
          fontWeight: '700',
          color: '#000',
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          letterSpacing: '0.02em',
          transition: 'opacity 0.2s ease',
          width: '100%',
        }}
        onMouseEnter={(e) => { if (status !== 'sending') e.currentTarget.style.opacity = '0.85'; }}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        {status === 'sending' ? 'Sending…' : 'Send Message →'}
      </button>

      {status === 'success' && (
        <p style={{ margin: 0, fontSize: '14px', color: '#4ade80', textAlign: 'center', fontWeight: '500' }}>
          Message sent! I'll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p style={{ margin: 0, fontSize: '14px', color: '#f87171', textAlign: 'center', fontWeight: '500' }}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
