import Image from "next/image";

export default function MissKofLandingPage() {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left section - Text content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="font-serif text-5xl md:text-6xl leading-tight tracking-wide">
            Qui sera la<br />
            <span className="font-serif text-6xl md:text-7xl uppercase">MISS KOF 2025</span>
            <span className="text-6xl"> ?</span>
          </h1>
          
          <p className="text-yellow-500 italic mt-2 mb-6">à suivre...</p>
          
          <p className="text-blue-400 mb-6 max-w-lg">
            Praesent velit bibendum tristique non molestia integer lorem. Nec gravida dignissim arcu in. Leo rhoncus amet tellus dui viverra porttitor senectus. Viverra id mauris nulla tempus. Lobortis scelerisque condimentum ut nibh enim malesuada ornare.
          </p>
          
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-8 rounded-full transition-all duration-300">
            Déposer ma candidature
          </button>
        </div>
        
        {/* Right section - Crown Image */}
        <div style={{display:'flex'}}>
          <Image 
            src="/assets/images/courone.svg"
            alt="Couronne"
            className="object-contain w-full h-auto"
            priority
            width={0}
            height={0}
          />
        </div>
      </div>
      
      {/* Background gradient with enhanced top gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-700 via-indigo-900 to-gray-950 opacity-80"></div>
      
      {/* Additional top gradient for more effect */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-fuchsia-600 to-transparent opacity-40"></div>
    </div>
  );
}

