'use client'

import { useEffect, useState } from 'react';
import Countdown from "./Rebours";
import Billet from "./billet";
import Partners from "./partners";
import Galery from "./galery";
import Info from "./info";
import FootHero from "./foot-hero";
import Paragraphe from "./paragraphe";
import Hero from "./hero";
import Header from "./header";
import NewsletterForm from "./InvolveSection";

export default function HomeScreen() {
  const [showAudioPrompt, setShowAudioPrompt] = useState(false);

  useEffect(() => {
    // Vérifier si nous avons déjà l'autorisation
    const audioPermission = localStorage.getItem('audioPermission');
    
    if (audioPermission === 'granted') {
      startBackgroundAudio();
    } else {
      // Montrer une demande d'autorisation après un court délai
      const timer = setTimeout(() => {
        setShowAudioPrompt(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const startBackgroundAudio = () => {
    const backgroundAudio = new Audio('/assets/audios/Bunny.mp3');
    backgroundAudio.volume = 0.3;
    backgroundAudio.loop = true;
    
    const playPromise = backgroundAudio.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Erreur de lecture audio:", error);
        setShowAudioPrompt(true);
      });
    }
    
    // Stocker la référence audio si besoin de la contrôler plus tard
    return backgroundAudio;
  };

  const handleAllowAudio = () => {
    localStorage.setItem('audioPermission', 'granted');
    setShowAudioPrompt(false);
    startBackgroundAudio();
  };

  const handleDenyAudio = () => {
    localStorage.setItem('audioPermission', 'denied');
    setShowAudioPrompt(false);
  };

  return (
    <div style={{backgroundColor:'#fff', position: 'relative'}}>
      {showAudioPrompt && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)',
          zIndex: 1000,
          maxWidth: '300px'
        }}>
          <p>Souhaitez-vous activer la musique dambiance ?</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button 
              onClick={handleAllowAudio}
              style={{
                padding: '8px 16px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Autoriser
            </button>
            <button 
              onClick={handleDenyAudio}
              style={{
                padding: '8px 16px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Refuser
            </button>
          </div>
        </div>
      )}
      
      <Header />
      <Hero />
      <Paragraphe />
      <FootHero />
      <Info />
      <Galery />
      <Partners />
      <Billet />
      <Countdown />
      <NewsletterForm />    
    </div>
  );
}