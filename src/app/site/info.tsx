"use client"

import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Info() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize() // Vérification initiale
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={inter.className} style={{
      flex: 1,
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: isMobile ? '':'center',
      backgroundImage: `url("/assets/images/sec2bg.png")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: isMobile ? '70vh':'100vh',
      padding: isMobile ? '20px 0' : 0
    }}>
      {/* Partie gauche - Tabs */}
      <div style={{
        display: 'flex',
        flex: isMobile ? 0 : 1,
        justifyContent: 'center',
        alignItems: isMobile ? 'flex-start' : 'center',
        height: isMobile ? 'auto' : '100vh',
        flexDirection: 'column',
        width: isMobile ? '100%' : 'auto',
        padding: isMobile ? '20px 0' : 0,
        marginTop: isMobile ? '20px' : 0,
      }}>
        <div style={{
          display: 'flex',
          flex: isMobile ? 0 : 0.8,
          width: isMobile ? '100%' : '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: isMobile ? 'row' : 'column',
          flexWrap: isMobile ? 'wrap' : 'nowrap',
          gap: isMobile ? '10px' : '15px'
        }}>
          {['a', 'b', 'c', 'd'].map((img, index) => (
            <div key={index} style={{
              width: isMobile ? '80px' : '200px',
              height: isMobile ? '40px' : '65px',
              backgroundColor: index === 0 ? 'red' : 'gray',
              border: '1px solid white',
              backgroundImage: `url("/assets/images/${img}.png")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }} />
          ))}
        </div>

        {!isMobile && (
          <div style={{
            flex: 0.2,
            width: '100%',
            backgroundImage: `url("/assets/images/gate.png")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain'
          }} />
        )}
      </div>

      {/* Partie droite - Contenu */}
      <div style={{
        display: 'flex',
        flex: isMobile ? 0:1,
        alignItems: 'center',
        justifyContent: isMobile ? '' : 'center',
        flexDirection: 'column',
        width: isMobile ? '90%' : 'auto',
        marginTop: isMobile ? '5px' : 0,
      }}>
        <div style={{ width: isMobile ? '100%' : '80%' }}>
          <div style={{
            width: '100%',
            height: isMobile ? '25vh' : '35vh',
            backgroundImage: `url("/assets/images/maps.png")`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            marginBottom: isMobile ? '15px' : 0,
          }} />

          <div style={{
            padding: 8,
            color: 'white',
            fontSize: isMobile ? '0.6rem' : '0.7rem',
            lineHeight: 1.7,
            fontWeight: 'lighter',
            textAlign: isMobile ? 'justify' : 'left'
          }}>
            Le K-mer Otaku Festival (KOF) est un événement unique célébrant la culture otaku au Cameroun...
          </div>

          <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end' }}>
            <div style={{
              width: isMobile ? '150px' : '248px',
              height: isMobile ? '35px' : '40px',
              backgroundColor: 'red',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: isMobile ? '0.6rem' : '0.7rem',
              color: 'white',
              borderRadius: 10,
              margin: isMobile ? '15px auto 0' : '30px 0',
              cursor: 'pointer'
            }}>
              <p>Nous découvrir</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gate en version mobile */}
      {isMobile && (
        <div style={{
          width: '100%',
          height: '100px',
          backgroundImage: `url("/assets/images/gate.png")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          marginTop: '30px'
        }} />
      )}
    </div>
  )
}       