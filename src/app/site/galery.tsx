"use client"
import React, { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import { motion, useAnimation } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export default function Gallery() {
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    // Animation d'entrée
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    });

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [controls]);

  // Configuration des animations
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.div 
      className={inter.className}
      initial={{ opacity: 0 }}
      animate={controls}
      style={{
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
      }}
    >
      {/* Image de fond animée */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      >
        <img 
          src="/assets/images/bgGallery.png" 
          alt="Background" 
          style={{
            width: '100%',
            height: isMobile ? '140%' : '120%',
            objectFit: 'contain',
            objectPosition: 'center'
          }}
        />
      </motion.div>

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
        {/* Titre avec animation */}
        <motion.div 
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            textAlign: 'center',
            marginBottom: isMobile ? '0.5rem' : '2rem'
          }}
        >
          <motion.h1 
            style={{
              fontSize: isMobile ? '1.2rem' : '1.875rem',
              fontWeight: 'bold',
              color: 'black',
              margin: 0,
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}
            whileHover={{ scale: 1.05 }}
          >
            KOF BRANCH
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              width: isMobile ? '80%' : 350,
              maxWidth: isMobile ? 300 : 'none',
              height: 8,
              marginTop: -20,
              backgroundImage: `url("/assets/images/underline.png")`,
              backgroundSize: 'contain',
              backgroundRepeat:'no-repeat',
              margin: isMobile ? '-5px auto 0' : '-10px 0 0',
              backgroundPosition:'center',
              transformOrigin: 'left center'
            }}
          />
        </motion.div>

        {/* Galerie avec animations */}
        <motion.div 
          style={{
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
          }}
        >
          {[
            { src: '/assets/images/Hallyu.png', alt: 'Hallyu' },
            { src: '/assets/images/Costplay.png', alt: 'Costplay' },
            { src: '/assets/images/MissKOF.png', alt: 'Miss KOF' }
          ].map((item, index) => (
            <motion.div 
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              style={{
                flexShrink: 0,
                width: isMobile ? '90px' : '191px',
                height: isMobile ? '120px' : '257.5px',
                backgroundImage: `url("${item.src}")`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                scrollSnapAlign: 'center',
                cursor: 'pointer',
                borderRadius: '8px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Overlay au hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(255, 140, 0, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '0.7rem' : '1rem',
                  textAlign: 'center',
                  padding: '10px'
                }}
              >
                {item.alt.toUpperCase()}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}