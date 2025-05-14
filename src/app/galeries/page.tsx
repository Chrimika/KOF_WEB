'use client';

import Head from 'next/head';
import styles from './styles/Galery.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageGrid from './components/ImageGrid';

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Gallery | K-MER OTAKU FESTIVAL</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.bigTitle}>
          <span className={styles.faded}>K-MER OTAKU FESTIVAL</span>
          <span className={styles.gallery}>GALLERY</span>
        </h1>
        <ImageGrid />
      </main>
      <Footer />
    </>
  );
}
