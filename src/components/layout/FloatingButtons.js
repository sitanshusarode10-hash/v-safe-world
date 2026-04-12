'use client';
import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* WhatsApp Float */}
      <a
        href="https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#25D366',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(37,211,102,0.4)',
          zIndex: 999,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.5)'; }}
        onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(37,211,102,0.4)'; }}
      >
        <MessageCircle size={26} />
      </a>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{
          position: 'fixed',
          bottom: '90px',
          right: '28px',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'var(--color-primary)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(10,104,71,0.3)',
          zIndex: 999,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          opacity: showScroll ? 1 : 0,
          pointerEvents: showScroll ? 'auto' : 'none',
          transform: showScroll ? 'translateY(0)' : 'translateY(10px)',
          border: 'none',
        }}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
