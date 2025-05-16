"use client"
import React, { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Gallery() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div className={inter.className} style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: isMobile ? 'flex-start' : 'center',
      width: '100%',
      height: isMobile ? '30vh' : '100vh',
      overflow: 'hidden',
      backgroundColor: '#fff',
      padding: isMobile ? '1rem 0' : 0
    }}>
      {/* Image de fond */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.7
      }}>
        <img 
          src="/assets/images/bgGallery.png" 
          alt="Background" 
          style={{
            width: '100%',
            height: isMobile ? '140%':'120%',
            objectFit: 'contain',
            objectPosition: 'center'
          }}
        />
      </div>

      {/* Contenu principal */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: isMobile ? '100%' : 'auto',
        padding: isMobile ? '0.5rem 0' : 0
      }}>
        {/* Titre compact */}
        <div style={{ 
          textAlign: 'center',
          marginBottom: isMobile ? '0.5rem' : '2rem'
        }}>
          <h1 style={{
            fontSize: isMobile ? '1.2rem' : '1.875rem',
            fontWeight: 'bold',
            color: 'black',
            margin: 0
          }}>
            KOF BRANCH
          </h1>
          <div style={{
              width: isMobile ? '80%' : 350,
              maxWidth: isMobile ? 300 : 'none',
              height: 8,
              marginTop: -20,
              backgroundImage: `url("/assets/images/underline.png")`,
              backgroundSize: 'contain',
              backgroundRepeat:'no-repeat',
              margin: isMobile ? '-5px auto 0' : '-10px 0 0',
              backgroundPosition:'center'
            }}></div>
        </div>

        {/* Galerie compacte */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? '0.5rem' : '2rem',
          width: '100%',
          padding: isMobile ? '0 0.5rem' : '0',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          marginTop: isMobile ? '0' : '1rem',
        }}>
          {[
            { src: '/assets/images/Hallyu.png', alt: 'Hallyu' },
            { src: '/assets/images/Costplay.png', alt: 'Costplay' },
            { src: '/assets/images/MissKOF.png', alt: 'Miss KOF' }
          ].map((item, index) => (
            <div 
              key={index}
              style={{
                flexShrink: 0,
                width: isMobile ? '90px' : '191px',
                height: isMobile ? '120px' : '257.5px',
                backgroundImage: `url("${item.src}")`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                scrollSnapAlign: 'center'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}