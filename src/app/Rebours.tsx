"use client";

import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 35,
    hours: 23,
    minutes: 47,
    seconds: 46
  });

  useEffect(() => {
    // Définir la date cible (35 jours, 23 heures, 47 minutes et 46 secondes à partir de maintenant)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 35);
    targetDate.setHours(targetDate.getHours() + 23);
    targetDate.setMinutes(targetDate.getMinutes() + 47);
    targetDate.setSeconds(targetDate.getSeconds() + 46);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        // Le compte à rebours est terminé
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      // Calculer les jours, heures, minutes et secondes restants
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    // Nettoyer l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      width: '60%',
      border: '2px solid #000',
      padding: '20px',
      boxSizing: 'border-box',
      fontFamily: 'Satoshi, sans-serif',
      margin: '20px 0',
      display: 'flex',
      justifyContent: 'center',
      margin:'0 auto',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: '500' }}>
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div style={{ fontSize: '0.7rem', marginTop: '5px' }}>Jrs</div>
        </div>
        
        <div style={{ fontSize: '2rem', fontWeight: '500', margin: '0 5px' }}>:</div>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: '500' }}>
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div style={{ fontSize: '0.7rem', marginTop: '5px' }}>Hrs</div>
        </div>
        
        <div style={{ fontSize: '2rem', fontWeight: '500', margin: '0 5px' }}>:</div>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: '500' }}>
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div style={{ fontSize: '0.7rem', marginTop: '5px' }}>Mins</div>
        </div>
        
        <div style={{ fontSize: '2rem', fontWeight: '500', margin: '0 5px' }}>:</div>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: '500', color: '#FF3B30' }}>
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div style={{ fontSize: '0.7rem', marginTop: '5px' }}>Secs</div>
        </div>
      </div>
    </div>
  );
}