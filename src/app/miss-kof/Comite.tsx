"use client"

import React, { useState, useEffect } from 'react';

const Comite = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section style={{
      backgroundColor: '#000',
      padding: '4rem 2rem',
      fontFamily: 'Arial, sans-serif',
      backgroundImage: `url("/assets/images/bg-wave.png")`,
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center',
      backgroundSize:"contain",
      width:'80%',
      margin:'0 auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ flex: 1 }}>
            <img 
              src="/assets/images/mid-icon.png" 
              alt="MISS KOF" 
              style={{
                width: 100,
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                height:60,
                margin:'20px auto'
              }}
            />
          </div>

        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: isMobile ? '1rem' : '1.2rem',
            color: '#fff',
            marginBottom: '0.5rem'
          }}>Le Comité</h1>
          <h2 style={{
            fontSize: isMobile ? '1.5rem' : '2.8rem',
            color: '#fff',
            fontWeight: '400',
            marginTop:-25
          }}>MISS KOF</h2>
        </div>
        
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: '3rem'
        }}>
          
          <div style={{
            flex: 2,
            fontSize: '0.7rem',
            lineHeight: '1.2',
            color: '#fff',
            width:'50%',
            textAlign:'center'
          }}>
            <p style={{ marginBottom: '1rem' }}>
              Mis sur pieds en 2022, le K-MER OTAKI LEFSTIVAL est devenu une force majeure dans la promotion 
              de la pop culture au Cameroun. Il se positionne comme un catalyseur dinnovation et de créativité 
              et sefforce de valoriser les acteurs culturels locaux souvent négligés, en créant une plateforme 
              de visibilité nationale et internationale.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              En dynamisant les secteurs culturels et créatifs du Cameroun, le festival favorise ainsi lunité, 
              le partage, et un dialogue interculturel enrichissant et aspire faire de la culture camerounaise 
              un épicentre de la modernité et de la Illustrant la richesse et la diversité de son héritage sur 
              la scène mondiale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comite;