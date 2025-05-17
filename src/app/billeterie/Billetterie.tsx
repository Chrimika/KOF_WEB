import React from 'react';

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
  return (
    <div className="bg-white text-black">
      <header className="text-center p-6 bg-gray-100">
        <h1 className="text-5xl font-extrabold text-red-600">BILLETTERIE</h1>
        <p className="mt-4 max-w-2xl mx-auto text-sm">
          RÉSERVE TON BILLET POUR LE K-MER OTAKU FESTIVAL ET VIS UN WEEK-END DE FOLIE...
        </p>
        <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded">
          Réserver mon billet
        </button>
      </header>

      {billets.map((b, i) => (
        <section key={i} className="p-2 md:p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-left text-gray-800 mb-6 md:mb-8">{b.titre}</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            {b.images.map((img, idx) => (
              b.titre === 'PASS KOF' ? (
                <div
                  key={idx}
                  className="w-full max-w-full md:max-w-7xl bg-white overflow-hidden flex flex-col items-start relative"
                >
                  {/* Animation Otaku - étoiles */}
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
                  {/* Animation Otaku - étoiles */}
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
