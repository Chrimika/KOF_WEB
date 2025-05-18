"use client"
import React, { useEffect, useState, useCallback } from 'react'
import { Inter } from 'next/font/google'
import { motion, useAnimation, Variants } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

interface GalleryItem {
  src: string
  alt: string
}

const Gallery = () => {
  const [isMobile, setIsMobile] = useState(false)
  const controls = useAnimation()

  const checkScreenSize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768)
  }, [])

  useEffect(() => {
    // Vérification initiale
    checkScreenSize()

    // Configuration du debounce pour le resize
    const debouncedResize = debounce(checkScreenSize, 100)
    window.addEventListener('resize', debouncedResize)

    // Animation d'entrée
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    })

    return () => window.removeEventListener('resize', debouncedResize)
  }, [checkScreenSize, controls])

  // Configuration des animations
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
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
  }

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  const galleryItems: GalleryItem[] = [
    { src: '/assets/images/Hallyu.png', alt: 'Hallyu' },
    { src: '/assets/images/Costplay.png', alt: 'Costplay' },
    { src: '/assets/images/MissKOF.png', alt: 'Miss KOF' }
  ]

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
      {/* Background Image */}
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
          alt="Gallery background" 
          style={{
            width: '100%',
            height: isMobile ? '140%' : '120%',
            objectFit: 'contain',
            objectPosition: 'center'
          }}
        />
      </motion.div>

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: isMobile ? '0.5rem 0' : 0
      }}>
        {/* Title Section */}
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
              height: 8,
              margin: isMobile ? '-5px auto 0' : '-10px 0 0',
              background: 'url("/assets/images/underline.png") center/contain no-repeat',
              transformOrigin: 'left center'
            }}
          />
        </motion.div>

        {/* Gallery Items */}
        <motion.div 
          style={{
            display: 'flex',
            gap: isMobile ? '0.5rem' : '2rem',
            width: '100%',
            padding: isMobile ? '0 0.5rem' : 0,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory'
          }}
        >
          {galleryItems.map((item, index) => (
            <motion.div 
              key={`gallery-item-${index}`}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              style={{
                flexShrink: 0,
                width: isMobile ? 90 : 191,
                height: isMobile ? 120 : 257.5,
                background: `url("${item.src}") center/contain no-repeat`,
                scrollSnapAlign: 'center',
                cursor: 'pointer',
                borderRadius: 8,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(255, 140, 0, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '0.7rem' : '1rem',
                  padding: 10
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

function debounce<T extends (...args: unknown[]) => void>(fn: T, delay: number) {
  let timeoutId: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

export default Gallery