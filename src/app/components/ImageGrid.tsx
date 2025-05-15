import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Galery.module.css';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc); // Ouvre du modale
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(`.${styles.item}`);
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          item.classList.add(styles.visible); 
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={styles.container}>
      <section className={styles.galleryGrid}>
        {/* Ligne 1 */}
        <div className={`${styles.item} ${styles.col6}`} onClick={() => openModal('/gallery/18.png')}>
          <Image src="/gallery/18.png" alt="Coffee" layout="responsive" width={500} height={300} />
        </div>
        <div className={`${styles.item} ${styles.col3}`} onClick={() => openModal('/gallery/20.png')}>
          <Image src="/gallery/20.png" alt="Plant 1" width={500} height={650} style={{ height: '380px', width: '100%', objectFit: 'cover' }} />
        </div>
        <div className={`${styles.item} ${styles.col3}`} onClick={() => openModal('/gallery/21.png')}>
          <Image src="/gallery/21.png" alt="Plant 2" width={500} height={150} style={{ height: '380px', width: '100%', objectFit: 'cover' }} />
        </div>

        {/* Ligne 2 */}
        <div className={`${styles.item} ${styles.col3} ${styles.stack}`}>
          <Image
            src="/gallery/22.png"
            alt="Lamp"
            layout="responsive"
            width={250}
            height={150}
            style={{ borderRadius: '16px', cursor: 'pointer' }}
            onClick={() => openModal('/gallery/22.png')}
          />
          <Image
            src="/gallery/117.png"
            alt="Flowers"
            layout="responsive"
            width={250}
            height={150}
            style={{ borderRadius: '16px', cursor: 'pointer' }}
            onClick={() => openModal('/gallery/117.png')}
          />
        </div>
        <div className={`${styles.item} ${styles.col3} ${styles.tall}`} onClick={() => openModal('/gallery/143.png')}>
          <Image src="/gallery/143.png" alt="Leaf" width={250} height={300} style={{ height: '587px', width: '100%', objectFit: 'cover' }} />
        </div>
        <div className={`${styles.item} ${styles.col6}`} onClick={() => openModal('/gallery/273.png')}>
          <Image src="/gallery/273.png" alt="Coffee" layout="responsive" width={500} height={300} />
        </div>

        {/* Ligne 3  */}
        <div className={`${styles.item} ${styles.col3}`} onClick={() => openModal('/gallery/18.png')}>
          <Image src="/gallery/18.png" alt="Plant 2" layout="responsive" width={250} height={150} />
        </div>
        <div className={`${styles.item} ${styles.col3}`} onClick={() => openModal('/gallery/20.png')}>
          <Image src="/gallery/20.png" alt="Plant 2" layout="responsive" width={250} height={150} />
        </div>
        <div className={`${styles.item} ${styles.col3}`} onClick={() => openModal('/gallery/21.png')}>
          <Image src="/gallery/21.png" alt="Plant 2" layout="responsive" width={250} height={150} />
        </div>

        {/* Ligne 1 */}
        <div className={`${styles.item} ${styles.col6}`} onClick={() => openModal('/gallery/18.png')}>
          <Image src="/gallery/18.png" alt="Coffee" layout="responsive" width={500} height={300} />
        </div>
        <div className={`${styles.item} ${styles.col3}`} onClick={() => openModal('/gallery/20.png')}>
          <Image src="/gallery/20.png" alt="Plant 1" width={500} height={650} style={{ height: '380px', width: '100%', objectFit: 'cover' }} />
        </div>
        <div className={`${styles.item} ${styles.col3}`} onClick={() => openModal('/gallery/21.png')}>
          <Image src="/gallery/21.png" alt="Plant 2" width={500} height={150} style={{ height: '380px', width: '100%', objectFit: 'cover' }} />
        </div>

        {/* Ligne 2 */}
        <div className={`${styles.item} ${styles.col3} ${styles.stack}`}>
          <Image
            src="/gallery/22.png"
            alt="Lamp"
            layout="responsive"
            width={250}
            height={150}
            style={{ borderRadius: '16px', cursor: 'pointer' }}
            onClick={() => openModal('/gallery/22.png')}
          />
          <Image
            src="/gallery/117.png"
            alt="Flowers"
            layout="responsive"
            width={250}
            height={150}
            style={{ borderRadius: '16px', cursor: 'pointer' }}
            onClick={() => openModal('/gallery/117.png')}
          />
        </div>
        <div className={`${styles.item} ${styles.col3} ${styles.tall}`} onClick={() => openModal('/gallery/143.png')}>
          <Image src="/gallery/143.png" alt="Leaf" width={250} height={300} style={{ height: '587px', width: '100%', objectFit: 'cover' }} />
        </div>
        <div className={`${styles.item} ${styles.col6}`} onClick={() => openModal('/gallery/273.png')}>
          <Image src="/gallery/273.png" alt="Coffee" layout="responsive" width={500} height={300} />
        </div>

        {/* Ligne 3  */}
        <div className={`${styles.item} ${styles.col3}`} onClick={() => openModal('/gallery/18.png')}>
          <Image src="/gallery/18.png" alt="Plant 2" layout="responsive" width={250} height={150} />
        </div>
        <div className={`${styles.item} ${styles.col3}`} onClick={() => openModal('/gallery/20.png')}>
          <Image src="/gallery/20.png" alt="Plant 2" layout="responsive" width={250} height={150} />
        </div>
        <div className={`${styles.item} ${styles.col3}`} onClick={() => openModal('/gallery/21.png')}>
          <Image src="/gallery/21.png" alt="Plant 2" layout="responsive" width={250} height={150} />
        </div>
        
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Image src={selectedImage} alt="Selected" layout="responsive" width={800} height={600} />
            <button className={styles.closeButton} onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </main>
  );
}
