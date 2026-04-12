import PageHero from '@/components/sections/PageHero';
import { Phone, Mail, MapPin, ArrowRight, Clock } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6';
import styles from '@/styles/inner-pages.module.css';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with V-Safe World Pvt Ltd for safety training, audits, equipment, and consultancy services.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Get in touch for a free consultation and let us help you build a safer workplace"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className={styles.pageContent}>
        <div className={styles.pageInner}>
          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <div>
              <h2 style={{ marginBottom: 'var(--space-xl)' }}>Get In Touch</h2>
              <div className={styles.contactCards}>
                <div className={styles.contactCard}>
                  <div className={styles.contactCardIcon}><Phone size={22} /></div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91-XXXXXXXXXX</p>
                  </div>
                </div>
                <div className={styles.contactCard}>
                  <div className={styles.contactCardIcon}><Mail size={22} /></div>
                  <div>
                    <h4>Email</h4>
                    <p>info@vsafeworld.com</p>
                  </div>
                </div>
                <div className={styles.contactCard}>
                  <div className={styles.contactCardIcon}><MapPin size={22} /></div>
                  <div>
                    <h4>Address</h4>
                    <p>Your Company Address Here</p>
                  </div>
                </div>
                <div className={styles.contactCard}>
                  <div className={styles.contactCardIcon}><Clock size={22} /></div>
                  <div>
                    <h4>Business Hours</h4>
                    <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <h4 style={{ marginBottom: 'var(--space-md)', marginTop: 'var(--space-xl)' }}>Follow Us</h4>
              <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                {[
                  { icon: <FaFacebook size={18} />, label: 'Facebook' },
                  { icon: <FaInstagram size={18} />, label: 'Instagram' },
                  { icon: <FaLinkedin size={18} />, label: 'LinkedIn' },
                  { icon: <FaYoutube size={18} />, label: 'YouTube' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={social.label}
                    style={{
                      width: 44, height: 44, borderRadius: 'var(--radius-md)',
                      background: 'var(--color-primary-light)', color: 'var(--color-primary)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactForm}>
              <h3>Send Us a Message</h3>
              <form action="#">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input type="text" className="form-input" placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input type="email" className="form-input" placeholder="your@email.com" required />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input type="tel" className="form-input" placeholder="+91-XXXXXXXXXX" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Service Interest</label>
                    <select className="form-select">
                      <option value="">Select a service</option>
                      <option value="training">Training Programs</option>
                      <option value="audits">Audits & Inspections</option>
                      <option value="equipment">Safety Equipment</option>
                      <option value="consultancy">Consultancy</option>
                      <option value="manpower">DMC/CMC Manpower</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea className="form-textarea" placeholder="Tell us about your requirements..." rows={5} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  Send Message <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapEmbed}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="V-Safe World Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
