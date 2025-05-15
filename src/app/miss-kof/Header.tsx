"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // pour l'icône burger

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-[#000F5F] via-[#3B0D96] to-[#40075E] text-white shadow-md">
      <div className="container mx-auto max-w-screen-xl px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assets/images/logo.png" // à adapter
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Navigation desktop */}
        <nav className="hidden md:flex gap-10 text-lg font-light items-center">
          <a href="#" className="hover:underline">accueil</a>
          <a href="#" className="hover:underline">candidater</a>
          <Image src="/assets/images/mid-icon.png" alt="center-icon" width={40} height={40} />
          <a href="#" className="hover:underline">actualités</a>
          <a href="#" className="hover:underline">boutique</a>
        </nav>

        {/* Icônes */}
        <div className="hidden md:flex gap-4 items-center">
          <Image src="/assets/icons/cart.svg" alt="Panier" width={20} height={20} />
          <Image src="/assets/icons/lang.svg" alt="Langue" width={20} height={20} />
        </div>

        {/* Burger mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#1e1e1e] text-white">
          <a href="#" className="block">accueil</a>
          <a href="#" className="block">candidater</a>
          <a href="#" className="block">actualités</a>
          <a href="#" className="block">boutique</a>
          <div className="flex gap-3 mt-2">
            <Image src="/assets/icons/cart.svg" alt="Panier" width={20} height={20} />
            <Image src="/assets/icons/lang.svg" alt="Langue" width={20} height={20} />
          </div>
        </div>
      )}
    </header>
  );
}
