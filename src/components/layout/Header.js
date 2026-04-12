'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Phone, Globe, Menu, X, Shield } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import styles from './Header.module.css';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Trainings', href: '/trainings' },
  { label: 'Audits', href: '/audits' },
  { label: 'Equipment', href: '/equipment' },
  { label: 'Consultancy', href: '/consultancy' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Header({ settings }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Utility Bar */}
      <div className={styles.utilityBar}>
        <div className={styles.utilityInner}>
          <div className={styles.utilityLeft}>
            <span className={styles.utilityItem}>
              <Mail /> {settings?.email || 'info@vsafeworld.com'}
            </span>
            <span className={styles.utilityItem}>
              <Phone /> {settings?.phone || '+91-XXXXXXXXXX'}
            </span>
          </div>
          <div className={styles.utilityRight}>
            <span className={styles.globeTag}>
              <Globe /> Services Across the Globe
            </span>
            <div className={styles.socialLinks}>
              {settings?.socialLinks?.facebook && <a href={settings.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>}
              {settings?.socialLinks?.instagram && <a href={settings.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>}
              {settings?.socialLinks?.linkedin && <a href={settings.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>}
              {settings?.socialLinks?.youtube && <a href={settings.socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>}
              {settings?.socialLinks?.twitter && <a href={settings.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaXTwitter /></a>}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <Shield size={24} />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>V-Safe World</span>
              <span className={styles.logoSub}>Pvt Ltd</span>
            </div>
          </Link>

          <nav className={styles.nav}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.navCta}>
            <Link href="/contact" className="btn btn-primary btn-sm">
              Get a Quote
            </Link>
          </div>

          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileOverlay} ${mobileOpen ? styles.open : ''}`} onClick={() => setMobileOpen(false)} />
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.mobileNavLink} ${pathname === item.href ? styles.active : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.mobileCta}>
          <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}
