import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import styles from './PageHero.module.css';

export default function PageHero({ title, description, breadcrumbs = [] }) {
  return (
    <section className={styles.pageHero}>
      <div className={styles.heroInner}>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i}>
              <ChevronRight size={14} />
              {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span>{crumb.label}</span>}
            </span>
          ))}
        </div>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
