"use client";

import React, { useEffect, useState } from 'react';

const billets = [
  {
    titre: 'PASS KOF',
    images: ['/assets/images/passkof.png'],
    prix: ['10.000 FCFA'],
  },
  {
    titre: 'BATMAN',
    images: ['/assets/images/batman1.png', '/assets/images/batman2.png'],
    prix: ['2.000 FCFA', '3.000 FCFA'],
  },
  {
    titre: 'JOKER',
    images: ['/assets/images/joker1.png', '/assets/images/joker2.png'],
    prix: ['5.000 FCFA', '7.000 FCFA'],
  },
];

const Billetterie = () => {
  
  const initialSeconds = 25 * 24 * 60 * 60;
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  
  const days = Math.floor(secondsLeft / (24 * 60 * 60));
  const hours = Math.floor((secondsLeft % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="bg-white text-black">
      <header className="relative flex flex-col items-center justify-center min-h-[340px] md:min-h-[420px] overflow-hidden">
        {/* Texte géant en arrière-plan */}
        <span
          className="absolute inset-0 flex items-center justify-center w-full h-full font-extrabold text-gray-200 select-none pointer-events-none uppercase tracking-tight leading-none"
          style={{
            zIndex: 1,
            fontSize: 'clamp(2.2rem, 8vw, 10rem)', 
            whiteSpace: 'pre-line',
            textAlign: 'center',
            left: 0,
            right: 0,
            fontFamily: '"Rockwell-ExtraBold", serif',
          }}
        >
          K-MER OTAKU{'\n'}FESTIVAL
        </span>
        {/* Titre principal par-dessus */}
        <h1
          className="relative z-10 font-extrabold text-red-600 tracking-tight mb-2"
          style={{
            lineHeight: 1,
            marginTop: '2rem',
            fontFamily: '"WildWolf", cursive',
            fontSize: 'clamp(2.5rem, 10vw, 8rem)', 
          }}
        >
          BILLETTERIE
        </h1>
      </header>

      {/* Texte d'intro */}
      <div className="flex flex-col items-center justify-center mt-8 mb-4 px-2">
        <p className="text-base md:text-lg text-black text-center max-w-2xl font-semibold">
          Réserve ton billet pour le Kmerr Otaku Festival et vis un week-end de folie avec des mangas, des cosplay, des ateliers et bien plus !<br />
          <span className="font-bold">Ne rate pas cette immersion totale dans la culture japonaise !</span>
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-bold text-base md:text-lg">
            Réserver mon billet
          </button>
          <div className="flex flex-row items-center gap-2 text-base md:text-lg font-mono font-bold mt-2 md:mt-0">
            <span>{days} <span className="font-normal">jours</span></span>
            <span>{hours.toString().padStart(2, '0')}<span className="font-normal">h</span></span>
            <span>{minutes.toString().padStart(2, '0')}<span className="font-normal">m</span></span>
            <span>
              <span className="text-red-600">{seconds.toString().padStart(2, '0')}</span>
              <span className="font-normal">s</span>
            </span>
          </div>
        </div>
      </div>

      {billets.map((b, i) => (
        <section key={i} className="p-2 md:p-6">
          
          <div className="flex flex-col items-start w-full md:max-w-7xl mx-auto px-2 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1" style={{ width: 'fit-content' }}>{b.titre}</h2>
            <svg
              width="100%"
              height="17"
              viewBox="0 0 259 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                maxWidth: 'min(260px, 100%)',
                width: 'calc(1ch * ' + b.titre.length + ' + 40px)',
                minWidth: '80px'
              }}
            >
              <path d="M6.42795 11.5415C7.75525 10.1848 8.68927 8.86891 10.1149 7.61421C11.8109 6.12489 15.0554 5.41084 18.0049 4.58457C19.1848 4.25815 21.3478 4.51317 23.0683 4.53357C24.8627 4.55397 26.3866 4.75799 28.0826 4.00313C29.3116 3.46249 32.0645 3.47269 34.1783 3.32988C36.5626 3.16666 39.0205 2.99325 41.4293 3.01365C49.3931 3.10546 57.3077 2.67702 65.2715 2.72803C65.4682 2.49341 63.2314 2.3914 65.0257 2.09558C65.9598 1.94257 66.9675 1.88136 68.049 1.97317C69.3026 2.08538 70.4333 2.16699 71.3673 1.50393C72.0064 1.0551 73.604 1.16731 74.8576 1.39173C74.4152 1.86096 73.432 1.59574 72.7192 1.79976C74.2185 2.07518 76.2832 2.17719 76.9469 1.84056C78.9624 0.820482 81.5924 1.25912 83.78 1.21831C93.6856 1.0143 103.616 0.983693 113.521 0.861284C126.499 0.698071 139.477 0.514457 152.48 0.341043C154.127 0.320642 155.897 0.728674 157.47 0.0146183C157.715 -0.0975904 159.682 0.473654 161.157 0.453253C168.727 0.330843 176.273 0.55526 183.794 0.698071C196.92 0.93269 210.045 1.34072 223.122 1.92217C228.603 2.16699 234.133 2.23839 239.59 2.55462C243.253 2.76883 246.792 3.26867 251.118 3.71751C247.898 4.36016 245.489 3.6869 243.105 4.02353C248.758 4.10514 253.674 5.37003 258.541 5.45164C260.212 6.01268 256.624 5.63526 258.689 6.2371C259.205 6.39012 258.172 6.45132 257.681 6.47172C256.157 6.51252 254.756 6.1759 253.06 6.77774C251.782 7.22658 252.593 7.21638 253.109 7.31838C253.945 7.4714 254.879 7.57341 255.813 7.61421C256.968 7.66521 257.877 7.83863 258.025 8.32827C258.172 8.84851 256.82 8.46087 256.403 8.71589C255.985 8.97091 255.395 9.17493 254.485 9.16473C254.977 9.39935 256.059 9.23613 256.28 9.70537C253.428 9.78698 250.7 9.12393 247.677 9.49115C248.316 9.83798 249.176 9.84818 249.914 9.91959C251.069 10.0216 252.273 9.95019 252.298 10.7357C252.298 11.1947 253.994 11.2559 254.879 11.5313C255.419 11.6945 256.009 11.8781 255.886 12.174C255.764 12.4494 254.977 12.3576 254.485 12.4392C252.667 12.7452 250.798 12.4596 248.98 12.5004C247.529 12.531 245.071 11.8577 245.096 13.2859C245.096 13.5613 243.818 13.5613 243.105 13.5511C240.5 13.5001 237.894 13.3879 235.289 13.3471C232.757 13.3062 230.25 13.4695 227.89 13.8367C226.563 14.0407 225.359 13.9795 224.056 13.8163C223.515 13.7449 222.63 13.5817 222.458 13.9999C222.286 14.4385 223.22 14.3263 223.81 14.3569C224.965 14.4181 226.268 14.2447 227.35 14.8058C222.163 15.5708 216.952 14.6018 211.545 15.1016C213.855 15.7544 216.461 15.3362 218.575 15.7442C218.181 16.2339 217.296 16.1013 216.633 16.1115C212.921 16.1421 209.21 16.1523 205.498 16.1625C192.52 16.2033 179.616 15.6524 166.687 15.3872C159.141 15.2342 151.595 15.0404 144.049 14.918C125.86 14.612 107.696 14.7956 89.5316 14.7548C79.1836 14.7344 68.811 14.7854 58.463 14.9996C44.7476 15.275 31.0321 15.4892 17.3413 15.9789C12.0567 16.1727 6.77206 16.2135 1.68409 16.9479C1.16791 17.0193 0.479684 17.0601 0.258467 16.7745C0.0618305 16.5297 -0.208545 16.2135 0.258467 15.9993C1.95446 15.2036 2.79017 14.2243 3.74877 13.2756C5.39561 11.6741 8.88591 11.5415 12.3516 11.3783C14.7604 11.2661 17.1938 11.2151 19.6026 11.1335C20.0696 11.1131 20.8562 11.2661 20.807 10.8683C20.7579 10.3786 19.873 10.603 19.3568 10.6336C15.0308 10.8581 10.6311 10.8785 6.37879 11.5925L6.42795 11.5415Z" fill="#FF0000"/>
            </svg>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-10 mt-4">
            {b.images.map((img, idx) => (
              b.titre === 'PASS KOF' ? (
                <div
                  key={idx}
                  className="w-full max-w-full md:max-w-7xl bg-white overflow-hidden flex flex-col items-start relative"
                >
                  
                  <div className="absolute left-4 top-4 animate-bounce-slow text-yellow-400 text-3xl select-none pointer-events-none z-10">★</div>
                  <div className="absolute right-8 top-10 animate-spin-slow text-pink-400 text-2xl select-none pointer-events-none z-10">✦</div>
                  <div className="absolute left-1/2 bottom-8 animate-wiggle text-blue-400 text-2xl select-none pointer-events-none z-10">☆</div>
                  
                  <div className="w-full flex justify-center mb-6 md:mb-8 px-2">
                    <img
                      src={img}
                      alt={`ticket ${b.titre}`}
                      className="w-auto h-auto max-w-full max-h-[18rem] md:max-h-[32rem] hover:scale-105 transition-transform duration-500 ease-out"
                      style={{ background: 'none', boxShadow: 'none', borderRadius: 0 }}
                    />
                  </div>
                  
                  <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8 px-2 md:px-8 items-start">
                   
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="text-lg md:text-xl font-bold text-red-600 mb-1">Accès exclusif et vip</h3>
                      <p className="text-gray-700 text-base md:text-base font-semibold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum urna, eget dictum urna urna eu urna.
                      </p>
                    </div>
                    
                    <div className="flex-1 mb-4 md:mb-0">
                      <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1">Avantage</h4>
                      <p className="text-gray-700 text-base">
                        Profitez d’un accès complet au festival, rencontres avec les invités, et bien plus encore !
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center min-w-[90px] md:min-w-[120px]">
                      <span className="text-2xl md:text-3xl font-extrabold text-red-600 leading-none">100</span>
                      <span className="text-xs font-medium text-gray-700 mt-1" style={{ fontVariantPosition: 'sub' }}>
                        Tickets restants
                      </span>
                    </div>
                  </div>
                 
                  <div className="w-full px-2 md:px-8 mt-4 md:mt-6">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-2 md:py-3 rounded text-base md:text-lg font-bold w-fit">
                      Réserver ce ticket | {b.prix[idx]}
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  key={idx}
                  className="w-full max-w-full md:max-w-2xl bg-white overflow-hidden flex flex-col items-center relative"
                >
                 
                  <div className="absolute left-2 top-2 animate-bounce-slow text-yellow-400 text-xl select-none pointer-events-none z-10">★</div>
                  <div className="absolute right-4 top-8 animate-spin-slow text-pink-400 text-lg select-none pointer-events-none z-10">✦</div>
                  
                  <img
                    src={img}
                    alt={`ticket ${b.titre}`}
                    className="mx-auto w-auto h-auto max-w-full max-h-[14rem] md:max-h-[28rem] hover:rotate-3 hover:scale-105 transition-transform duration-500 ease-out"
                    style={{ background: 'none', boxShadow: 'none', borderRadius: 0 }}
                  />
                  <div className="p-4 md:p-8 w-full flex flex-col items-start text-left">
                    <p className="mb-6 md:mb-8 text-gray-700 text-base md:text-xl font-semibold">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum urna, eget dictum urna urna eu urna.
                    </p>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-10 py-2 md:py-4 rounded text-base md:text-xl font-bold">
                      Réserver ce ticket | {b.prix[idx]}
                    </button>
                  </div>
                </div>
              )
            ))}
          </div>
        </section>
      ))}

      
    </div>
  );
};

export default Billetterie;
