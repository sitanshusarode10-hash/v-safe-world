'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Award, Users, CheckCircle, GraduationCap, ClipboardCheck, HardHat, Flame, Briefcase, ChevronRight, Quote, Calendar, ArrowRight, BookOpen, Search, HeartPulse, Image as ImageIcon } from 'lucide-react';
import styles from './page.module.css';

const heroSlides = [
  {
    subtitle: 'Your Safety Partner',
    title: 'One-stop shop for all health and safety training needs',
    desc: 'Comprehensive EHS training, safety audits, premium equipment, and expert consultancy — delivered with excellence.',
  },
  {
    subtitle: 'Expert Training Programs',
    title: 'Fire Safety, Industrial Safety & Beyond',
    desc: 'From first aid to confined space entry, we cover the full spectrum of workplace safety training programs.',
  },
  {
    subtitle: 'Audit & Compliance',
    title: 'Thorough Safety Audits for Every Industry',
    desc: 'Our certified auditors help you achieve full EHS compliance with actionable insights and detailed reports.',
  },
];

const services = [
  { icon: <GraduationCap size={30} />, title: 'EHS Training', desc: 'Comprehensive safety training programs covering health, fire, industrial, and disaster management.', href: '/trainings' },
  { icon: <ClipboardCheck size={30} />, title: 'Audits & Inspections', desc: 'Thorough safety audits to evaluate compliance, identify risks, and implement corrective actions.', href: '/audits' },
  { icon: <HardHat size={30} />, title: 'Safety Equipment', desc: 'Premium PPE, safety shoes, gloves, and industrial safety equipment for your workforce.', href: '/equipment' },
  { icon: <Flame size={30} />, title: 'Fire Safety', desc: 'Specialized fire safety training, evacuation drills, and fire fighting equipment solutions.', href: '/trainings' },
  { icon: <Briefcase size={30} />, title: 'Consultancy', desc: 'Expert safety consultancy and DMC/CMC manpower services for your organization.', href: '/consultancy' },
  { icon: <Search size={30} />, title: 'Industrial Safety', desc: 'Workplace safety protocols, hazard identification, and compliance training programs.', href: '/trainings' },
];

export default function HomeClient({ testimonials, blogs }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        {heroSlides.map((slide, i) => (
          <div key={i} className={`${styles.heroSlide} ${i === currentSlide ? styles.active : ''}`}>
            <div className={styles.heroOverlay} />
            <div className={styles.heroBg} />
          </div>
        ))}

        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>{heroSlides[currentSlide].subtitle}</p>
          <h1 className={styles.heroTitle}>
            {heroSlides[currentSlide].title.split(' ').map((word, i) =>
              ['safety', 'training', 'audits'].includes(word.toLowerCase())
                ? <span key={i}>{word} </span>
                : word + ' '
            )}
          </h1>
          <p className={styles.heroDesc}>{heroSlides[currentSlide].desc}</p>
          <div className={styles.heroActions}>
            <Link href="/contact" className="btn btn-accent btn-lg">Book a Consultation</Link>
            <Link href="/trainings" className="btn btn-white btn-lg">Explore Services</Link>
          </div>
        </div>

        <div className={styles.heroIndicators}>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`${styles.indicator} ${i === currentSlide ? styles.active : ''}`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className={styles.heroBadges}>
          <div className={styles.heroBadgesInner}>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}><Award size={18} /></div>
              <span className={styles.badgeText}>DISH Approved</span>
            </div>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}><Shield size={18} /></div>
              <span className={styles.badgeText}>National Safety<br/>Council Member</span>
            </div>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}><Users size={18} /></div>
              <span className={styles.badgeText}>50+ Trusted Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className={styles.trustBar}>
        <div className={styles.trustBarInner}>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}><Award size={24} /></div>
            <div className={styles.trustLabel}>DISH Approved<small>First Aid Training Institute</small></div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}><Shield size={24} /></div>
            <div className={styles.trustLabel}>NSC Member<small>National Safety Council</small></div>
          </div>
          <div className={styles.statBadge}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Trusted<br/>Clients</div>
          </div>
          <div className={styles.statBadge}>
            <div className={styles.statNumber}>200+</div>
            <div className={styles.statLabel}>Training<br/>Sessions</div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className={`${styles.aboutPreview} reveal`}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImage}>
            <div className={styles.aboutImagePlaceholder}>
              <ImageIcon size={48} />
              <span>Company Image</span>
            </div>
          </div>
          <div className={styles.aboutText}>
            <h2>About <span>V-Safe World</span></h2>
            <p>
              V-Safe World Pvt Ltd is a leading provider of comprehensive Environment, Health, and Safety (EHS) solutions. 
              We specialize in delivering world-class safety training programs, conducting thorough audits and inspections, 
              supplying premium safety equipment, and providing expert consultancy services.
            </p>
            <div className={styles.aboutFeatures}>
              <div className={styles.aboutFeature}><CheckCircle size={18} /> Certified Trainers</div>
              <div className={styles.aboutFeature}><CheckCircle size={18} /> Industry Expertise</div>
              <div className={styles.aboutFeature}><CheckCircle size={18} /> Custom Programs</div>
              <div className={styles.aboutFeature}><CheckCircle size={18} /> Pan India Presence</div>
            </div>
            <Link href="/about" className="btn btn-primary">Learn More About Us <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={`${styles.services} reveal`}>
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Comprehensive safety solutions tailored to your industry needs</p>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, i) => (
            <Link href={service.href} key={i} className={`${styles.serviceCard} reveal reveal-delay-${i + 1}`}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <span className={styles.serviceLink}>Learn More <ChevronRight size={16} /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaContent}>
          <h2>🔥 National Safety Week 2024</h2>
          <p>Elevate your workplace safety culture. Book customized training programs for your team today!</p>
          <Link href="/contact" className="btn btn-accent btn-lg">Book Now <ArrowRight size={16} /></Link>
        </div>
      </section>

      {/* Client Logos */}
      <section className={styles.clientLogos}>
        <div className={styles.clientLogosTitle}>
          <h2>Our Prestigious Clients</h2>
        </div>
        <div className={styles.logosTrack}>
          {[...Array(12)].map((_, i) => (
            <div key={i} className={styles.logoItem}>Client {(i % 6) + 1}</div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${styles.testimonials} reveal`}>
        <div className="section-title">
          <h2>What Our Clients Say</h2>
          <p>Trusted by leading organizations across industries</p>
        </div>
        <div className={styles.testimonialGrid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}><Quote size={20} /></div>
              <blockquote>{t.quote}</blockquote>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>{t.author[0]}</div>
                <div className={styles.authorInfo}>
                  <strong>{t.author}</strong>
                  <span>{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Preview */}
      <section className={`${styles.blogPreview} reveal`}>
        <div className="section-title">
          <h2>Latest Articles</h2>
          <p>Stay updated with the latest in workplace safety</p>
        </div>
        <div className={styles.blogGrid}>
          {blogs.map((blog) => (
            <div key={blog.id} className={styles.blogCard}>
              <div className={styles.blogThumb}><BookOpen size={32} /></div>
              <div className={styles.blogBody}>
                <div className={styles.blogDate}><Calendar size={12} /> {blog.publishDate}</div>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <span className={styles.blogReadMore}>Read More <ArrowRight size={14} /></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enquiry + Map */}
      <section className={`${styles.enquiry} reveal`}>
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Have a question? Send us a message and we will get back to you shortly</p>
        </div>
        <div className={styles.enquiryGrid}>
          <div className={styles.enquiryForm}>
            <h3>Send Us an Enquiry</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formRow}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-input" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" placeholder="your@email.com" />
                </div>
              </div>
              <div className={styles.formRow}>
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
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="Tell us about your requirements..." rows={4}></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Send Enquiry <ArrowRight size={16} />
              </button>
            </form>
          </div>
          <div className={styles.enquiryMap}>
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
