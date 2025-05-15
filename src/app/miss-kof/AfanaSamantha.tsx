import { useState } from 'react';

export default function AlanaSamantha() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950">
      <main className="flex-1 flex flex-col lg:flex-row max-w-6xl mx-auto p-4">
        <div className="w-full lg:w-1/2 bg-teal-900/30">
          <img
            src="/assets/images/tof.png" 
            alt="Miss KF 2024 portrait" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="w-full lg:w-1/2 bg-gray-950 text-white px-4 lg:px-8 py-12 flex flex-col justify-center">
          <h1 className="font-serif text-5xl lg:text-6xl mb-1 tracking-wide">Afana</h1>
          <h1 className="font-serif text-5xl lg:text-6xl mb-4 tracking-wide">Samantha</h1>
          
          <p className="text-yellow-500 text-lg italic mb-8">miss kf 2024</p>
          
          <hr className="border-gray-700 mb-8" />
          
          <div className="space-y-4 text-gray-300 text-sm">
            <p>
              Lorem ipsum dolor sit amet consectetur. Penatibus tortor sed fermentum vel 
              sollicitudin fringilla. Luctus sed convallis dictum commodo enim habitant facilisi 
              lectus maecenas. Urna eros urna id velit vitae erat ultricies dis congue. Sit et 
              tincidunt erat mauris faucibus.
            </p>
            <p>
              Morbi augue commodo in nisi sem. Pulvinar nibh commodo mollis ultrices. Enim nam nulla nibh phasellus. Scelerisque vel
              phasellus nisi enim felis cum.
            </p>
            <p>
              Praesent velit bibendum tristique non molestie integer lorem. Nec gravida 
              dignissim arcu in. Leo rhoncus amet tellus dui viverra porttitor senectus. Viverra 
              id mauris nulla tempus. Lobortis scelerisque condimentum ut nibh enim 
              malesuada ornare.
            </p>
            <p>
              Posuere sociis purse amet morbi. Ac vel orci malesuada lorem mauris risus amet 
              sit. Consectetur semper bibendum velit venenatis facilisis bibendum tincidunt. 
              Enim eleifend porta elementum enim lectus proin. Consetetur nullam in 
              convallis justo sed. Fusce viverra leo pretium a platea.
            </p>
            <p>
              Lectus faucibus dui ultrices integer risus. Nisi consequat viverra euismod auctor 
              luctus pellentesque. Diam tincidunt amet posuere in velit. Neque gravida etiam 
              tincidunt non auctor. Tortor augue diam a in id sed eleifend nunc. Turpis vitae eu 
              felis magna quis imperdiet.
            </p>
          </div>
          
          <div className="mt-12 text-gray-500 text-xs">
            © comikof 2024 - Tous droits réservés
          </div>
        </div>
      </main>
    </div>
  );
}