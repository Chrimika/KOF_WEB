"use client";

import React, { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Partners() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Fonction pour vérifier la taille de l'écran
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Vérifier au chargement
    checkScreenSize();

    // Ajouter un écouteur d'événement pour surveiller les changements de taille
    window.addEventListener('resize', checkScreenSize);

    // Nettoyer l'écouteur d'événement lors du démontage
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div className={inter.className} style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: isMobile ? '25vh':'40vh',
        marginTop: isMobile ? '100px':''
      }}>
        {/* Bloc de titre ajouté au-dessus */}
        <div style={{ textAlign: 'center',justifyContent:'center',alignItems:'center',flex:0.3 }}>
            <h1 className="font-bold mb-8" style={{
              fontSize: isMobile ? '1.5rem' : '1.875rem'
            }}>KOF PARNERS</h1>
            <div style={{
              width: isMobile ? '80%' : 350,
              maxWidth: isMobile ? 300 : 'none',
              height: 8,
              marginTop: -20,
              backgroundImage: `url("/assets/images/underline.png")`,
              backgroundSize: 'contain',
              backgroundRepeat:'no-repeat',
              margin: isMobile ? '-37px auto 0' : '-35px 0 0',
              backgroundPosition:'center'
            }}></div>
        </div>
        
        {/* Les trois divs s'adaptent selon la taille d'écran */}
        <div style={{
            flex: 0.7,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            marginTop: isMobile ? -40 : -80,
            backgroundImage: `url("/assets/images/bgParters.png")`,
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'contain'
        }}>
          
        </div>
    </div>
  )
}