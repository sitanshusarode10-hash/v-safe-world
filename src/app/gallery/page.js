import PageHero from '@/components/sections/PageHero';
import { Image as ImageIcon, Video } from 'lucide-react';
import styles from '@/styles/inner-pages.module.css';

export const metadata = {
  title: 'Gallery',
  description: 'Browse our gallery of training sessions, safety events, and equipment showcases at V-Safe World.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Our Gallery"
        description="Explore our training sessions, safety events, and equipment showcases"
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className={styles.pageContent}>
        <div className={styles.pageInner}>
          <div className={styles.tabBar}>
            <button className={`${styles.tabBtn} ${styles.tabBtnActive}`}>All</button>
            <button className={styles.tabBtn}>Training</button>
            <button className={styles.tabBtn}>Events</button>
            <button className={styles.tabBtn}>Equipment</button>
          </div>

          <div className={styles.galleryGrid}>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={styles.galleryItem}>
                <ImageIcon size={32} />
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="section-title" style={{ marginTop: 'var(--space-4xl)' }}>
            <h2>Training Videos</h2>
            <p>Watch highlights from our training sessions and safety events</p>
          </div>
          <div className={styles.cardsGrid} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={styles.productCard}>
                <div className={styles.productImage} style={{ background: 'var(--color-gray-900)', color: 'var(--color-white)' }}>
                  <Video size={40} />
                </div>
                <div className={styles.productBody}>
                  <h3>Training Video {i}</h3>
                  <p>Video placeholder — embed YouTube or cloud-hosted training videos here.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
