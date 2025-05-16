"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Hero() {
  const [imageSrc, setImageSrc] = useState("/assets/images/Banner.svg");
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      const mobileCheck = window.innerWidth <= 768;
      setIsMobile(mobileCheck);
      setImageSrc(mobileCheck ? "/assets/images/BannerMobile.png" : "/assets/images/Banner.svg");
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Animation d'entrée
    controls.start({
      opacity: 1,
      transition: { duration: 1.5 }
    });

    return () => window.removeEventListener("resize", handleResize);
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '70vh' : '100vh',
        overflow: 'hidden',
        backgroundColor: '#FF8C00',
      }}
    >
      <motion.img 
        src={imageSrc} 
        alt="Bannière Hero"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 2,
          ease: "easeOut"
        }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
      
      {/* Contenu optionnel avec animation de texte style anime */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          zIndex: 1
        }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 1,
            type: "spring",
            stiffness: 100
          }}
          style={{
            textAlign: 'center',
            padding: '0 20px'
          }}
        >
          <motion.h1
            style={{
              fontSize: isMobile ? '2rem' : '4rem',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            KOF FESTIVAL
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1.5
            }}
            style={{
              fontSize: isMobile ? '1rem' : '1.5rem',
              marginTop: '20px',
              maxWidth: '800px'
            }}
          >
            L'événement otaku le plus attendu de l'année !
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}