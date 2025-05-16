'use client';

import styles from './styles/Galery.module.css';
import ImageGrid from './components/ImageGrid';

export default function GalleryPage() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.bigTitle}>
          <span className={styles.faded}>K-MER OTAKU FESTIVAL</span>
          <span className={styles.gallery}>GALLERY</span>
        </h1>
        <ImageGrid />
      </main>
    </>
  );
}
