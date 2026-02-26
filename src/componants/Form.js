import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Form() {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!name || !email || !message) return;

    setStatus('sending');

    emailjs.sendForm(
      'service_9e29r6b',
      'template_m153y0i',
      form.current,
      'tazHbsaSG9euaXE3h'
    )
    .then(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    })
    .catch(() => {
      setStatus('error');
    });
  };

  return (
    <div>
      <form
        ref={form}
        className="form flex flex-col grid justify-items-stretch items-end"
        onSubmit={handleFormSubmit}
        noValidate
      >
        {/* Name */}
        <input
          className="border-2 border-solid border-black"
          value={name}
          name="from_name"
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
        />
        {submitted && name.length === 0 && (
          <p className="text-red-500 text-sm">Name is required</p>
        )}

        {/* Email */}
        <input
          className="border-2 border-solid border-black"
          value={email}
          name="from_email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        {submitted && email.length === 0 && (
          <p className="text-red-500 text-sm">Email is required</p>
        )}

        {/* Message */}
        <textarea
          className="border-2 border-solid border-black"
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="your message"
          rows={4}
        />
        {submitted && message.length === 0 && (
          <p className="text-red-500 text-sm">Message is required</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="border-2 border-solid border-black"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Submit'}
        </button>

        {/* Feedback messages */}
        {status === 'success' && (
          <p className="text-green-600 mt-2">Message sent successfully! ✅</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-2">Something went wrong. Please try again. ❌</p>
        )}
      </form>
    </div>
  );
}

export default Form;