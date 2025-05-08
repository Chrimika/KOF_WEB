import React from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const FestivalCountdown = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-lg my-12">
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 animate-pulse">
        JUSQU'AU FESTIVAL
      </h1>
      
      <div className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto space-y-4">
        <p>
          Ne manquez rien de cette édition du <span className="font-semibold text-blue-600">K-mer Olaku Festival</span>, 
          où vous vivrez une expérience mémorable en explorant l'univers fascinant de la culture pop atelétique.
        </p>
        <p className="text-lg md:text-xl font-medium italic text-purple-700">
          Nous sommes impatients de vous accueillir et de vivre ensemble cette aventure extraordinaire !
        </p>
      </div>
      
      {/* Optionnel: Ajouter un vrai compte à rebours ici */}
    </div>
  );
};

export default FestivalCountdown;