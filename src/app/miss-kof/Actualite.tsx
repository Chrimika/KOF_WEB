"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "/assets/images/actu-img1.svg",
  "/assets/images/actu-img2.svg",
  "/assets/images/actu-img3.svg",
  // ajoute autant d’images que nécessaire
];

const Actualites = () => {

    const [index, setIndex] = useState(0);

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ backgroundColor: '#000', color: 'white', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Image
            src="/assets/images/actu-title.svg"
            width={200}
            height={100}
            alt="title"
            className="object-cover"
            priority
            style={{margin:'30px auto'}}
        />
        <p style={{ margin: '30px auto', width:'70%' }}>
          Praesent velit bibendum tristique non molestie integer lorem. Nec gravida dignissim arcu in. Leo rhoncus amet tellus dui viverra porttitor senectus. Viviera id mauris nulla tempus.
        </p>
        <Image
            src="/assets/images/button-more.svg"
            width={200}
            height={100}
            alt="title"
            className="object-cover"
            priority
            style={{margin:'40px auto',cursor:'pointer'}}
        />
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
            style={{
                position: "relative",
                borderRadius: "10px",
                overflow: "hidden",
                marginBottom: "20px",
                width: "55%",
                margin: "40px auto",
            }}
            >
            <img
                src={images[index]}
                alt={`Image ${index + 1}`}
                className="object-contain"
                style={{ display: "block", width: "100%", height: "auto", cursor: "pointer" }}
            />

            {/* Bouton gauche */}
            <button
                onClick={goPrev}
                style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.5)",
                border: "none",
                color: "white",
                padding: "8px",
                borderRadius: "50%",
                cursor: "pointer",
                }}
            >
                <ChevronLeft />
            </button>

            {/* Bouton droite */}
            <button
                onClick={goNext}
                style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.5)",
                border: "none",
                color: "white",
                padding: "8px",
                borderRadius: "50%",
                cursor: "pointer",
                }}
            >
                <ChevronRight />
            </button>
        </div>
        <div style={{display:'flex',padding:'40px 0'}}>
            <div style={{flex:3}}>
                <h2 style={{ fontSize: '1.5em'}}>MISS KOF 2024: Une première réussite et une ouverture pour les éditions futures</h2>
                <div style={{display:'flex',alignItems:'center',margin:'20px 0'}}>
                    <img
                        src='/assets/images/info.svg'
                        alt='info'
                    />
                    <img
                        src='/assets/images/innovation.svg'
                        alt='innov'
                        style={{margin:'0 10px'}}
                    />
                    <img
                        src='/assets/images/developpement.svg'
                        alt='dev'
                    />
                    <p style={{ color: '#797979', margin: '10px 20px', fontSize:12 }}>Sam. 16 Avr. 2025</p>
                </div>
                
            </div>
            <div style={{flex:1}}>
                <img
                    src='/assets/images/tabs.svg'
                    alt='dev'
                    style={{width:100}}
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Actualites;
