"use client"
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Info() {
  const [isMobile, setIsMobile] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Données pour les sections (à compléter)
  const sections = [
    {
      id: 'hallyu',
      title: 'Hallyu Wave',
      content: 'Contenu sur la culture coréenne...',
      image: '/assets/images/maps.png'
    },
    {
      id: 'cosplay',
      title: 'Concours Cosplay',
      content: 'Détails du concours...',
      image: '/assets/images/maps.png'
    },
    // Ajoutez d'autres sections ici
  ]

  // Animation variants
  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 } 
    }
  }

  return (
    <div className={inter.className} style={{
      position: 'relative',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: isMobile ? 'flex-start' : 'center',
      background: `url("/assets/images/sec2bg.png") center/cover no-repeat`,
      minHeight: isMobile ? '70vh' : '100vh',
      padding: isMobile ? '20px 0' : '40px',
      overflow: 'hidden'
    }}>
      {/* Partie gauche - Tabs */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={contentVariants}
        style={{
          display: 'flex',
          flex: isMobile ? 0 : 1,
          justifyContent: 'center',
          alignItems: isMobile ? 'center' : 'center',
          flexDirection: 'column',
          width: isMobile ? '100%' : 'auto',
          padding: isMobile ? '0 10px' : '0 40px',
          zIndex: 2
        }}
      >
        <motion.div 
          variants={tabVariants}
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'column',
            gap: '15px',
            marginBottom: isMobile ? '20px' : '40px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {['Hallyu Wave', 'Cosplay', 'Gaming', 'Communauté'].map((tab, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(index)}
              style={{
                width: isMobile ? '120px' : '200px',
                height: isMobile ? '50px' : '65px',
                background: activeTab === index ? '#FF4500' : 'rgba(128, 128, 128, 0.7)',
                border: '1px solid white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: isMobile ? '0.8rem' : '1rem',
                cursor: 'pointer',
                borderRadius: '8px',
                textAlign: 'center',
                padding: '10px',
                transition: 'all 0.3s ease'
              }}
            >
              {tab}
            </motion.div>
          ))}
        </motion.div>

        {!isMobile && (
          <motion.div
            variants={tabVariants}
            style={{
              width: '100%',
              height: '150px',
              background: `url("/assets/images/gate.png") center/contain no-repeat`,
              marginTop: '20px'
            }}
          />
        )}
      </motion.div>

      {/* Partie droite - Contenu */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={contentVariants}
        style={{
          display: 'flex',
          flex: isMobile ? 0 : 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: isMobile ? '90%' : 'auto',
          maxWidth: '800px',
          zIndex: 2
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            style={{
              width: '100%',
              background: 'rgba(0, 0, 0, 0.6)',
              borderRadius: '15px',
              padding: '20px',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            {/* Espace pour le contenu dynamique */}
            <div style={{
              height: isMobile ? '25vh' : '35vh',
              background: `url(${sections[activeTab]?.image || '/assets/images/maps.png'}) center/contain no-repeat`,
              marginBottom: '20px'
            }} />

            <motion.div
              style={{
                color: 'white',
                fontSize: isMobile ? '0.9rem' : '1rem',
                lineHeight: 1.7,
                marginBottom: '30px'
              }}
            >
              <h2 style={{ 
                fontSize: isMobile ? '1.2rem' : '1.5rem',
                marginBottom: '15px',
                color: '#FF8C00'
              }}>
                {sections[activeTab]?.title || 'Titre de section'}
              </h2>
              <p>
                {sections[activeTab]?.content || 'Contenu à remplacer...'}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push(`/${sections[activeTab]?.id || 'info'}`)}
              style={{
                width: isMobile ? '160px' : '200px',
                height: isMobile ? '40px' : '50px',
                background: '#FF4500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: '50px',
                cursor: 'pointer',
                margin: '0 auto',
                fontSize: isMobile ? '0.8rem' : '1rem',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
              }}
            >
              En savoir plus
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Gate en version mobile */}
      {isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            width: '100%',
            height: '100px',
            background: `url("/assets/images/gate.png") center/contain no-repeat`,
            marginTop: '30px',
            zIndex: 2
          }}
        />
      )}

      {/* Overlay pour meilleure lisibilité */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.4)',
        zIndex: 1
      }} />
    </div>
  )
}