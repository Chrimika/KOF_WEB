"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [backgroundImage, setBackgroundImage] = useState("/assets/images/Banner.svg");

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setBackgroundImage(isMobile ? "/assets/images/BannerMobile.png" : "/assets/images/Banner.svg");
    };

    handleResize(); // appel initial
    window.addEventListener("resize", handleResize); // mise à jour si l'écran change

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{
      flex: 7,
      height: 200,
      padding: '10px 40px',
      backgroundColor: '#FF8C00',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundImage: `url("${backgroundImage}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      {/* Contenu optionnel */}
    </div>
  );
}

