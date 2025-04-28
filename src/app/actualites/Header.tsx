"use client";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-4 lg:top-[4vmin] w-full px-4 lg:px-[5%] py-3 lg:py-[3vh] flex justify-between items-center z-50">
        <a className="header-logo" href="#">
          <img
            src="/actualite/K-mer Otaku Festival Logo - White 1.png"
            alt="Site Logo"
            className="h-12 lg:h-[7vh]"
          />
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 lg:w-[5vw] h-6 relative"
          aria-label="Menu"
        >
          <span
            className={`absolute top-0 left-0 w-full h-1 bg-black transition-all ${
              menuOpen ? "rotate-45 top-1/2" : ""
            }`}
          />
          <span
            className={`absolute top-1/2 left-0 w-full h-1 bg-black transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute bottom-0 left-0 w-full h-1  bg-black transition-all ${
              menuOpen ? "-rotate-45 top-1/2" : ""
            }`}
          />
        </button>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

const MobileMenu = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  if (!open) return null;

  const navLinks = [
    ["Programme", "Billeterie", "Actualités", "Infos. Pratiques"],
    ["Awards", "Activités", "Hallyu", "Concerts"],
    ["Partenariat", "Espaces", "Bénévoles", "Sponsoring"],
    ["Média - Presse", "À Propos", "Organisation", "Contacter"],
  ];

  return (
    <div className="fixed inset-0 z-40 bg-[#0A1E00] pt-24">
      <div className="container mx-auto px-4 h-full flex flex-col">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 flex-grow">
          {navLinks.map((group, i) => (
            <div key={i} className="mb-8">
              {group.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-white text-lg lg:text-xl mb-4 hover:underline"
                  onClick={onClose}
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="py-8 flex justify-center space-x-6">
          {[
            "Youtube",
            "Instagram",
            "Facebook",
            "Twitter",
            "Whatsapp",
            "Spotify",
            "Twitch",
          ].map((social) => (
            <a
              key={social}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={`/icon/${social}.svg`}
                alt={social}
                className="h-8 w-8 filter invert hover:filter-none transition-all"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
