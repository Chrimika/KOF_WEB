"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [imageSrc, setImageSrc] = useState("/assets/images/Banner.svg");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobileCheck = window.innerWidth <= 768;
      setIsMobile(mobileCheck);
      setImageSrc(mobileCheck ? "/assets/images/BannerMobile.png" : "/assets/images/Banner.svg");
    };

    handleResize(); // appel initial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: isMobile ? '70vh' : '100vh',
      overflow: 'hidden',
      backgroundColor: '#FF8C00',
    }}>
      <img 
        src={imageSrc} 
        alt="Bannière Hero"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
      
      {/* Contenu optionnel par-dessus l'image si besoin */}
      <div style={{
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
      }}>
        {/* Votre contenu ici */}
      </div>
    </div>
  );
}