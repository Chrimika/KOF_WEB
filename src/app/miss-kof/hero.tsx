import Image from "next/image";
import React from "react";
import Header from "./Header";
import { gloock, volgarie } from "../actualite/font"; // adapte le chemin

export default function MissKofHero() {
  return (
    <section
      className={`relative w-full h-screen text-white ${volgarie.variable} ${gloock.variable} font-[var(--font-volgarie)]`}
    >
      {/* Header transparent au-dessus */}
      <Header />

      {/* Background image */}
      <Image
        src="/assets/images/miss-kof-hero.png"
        alt="Miss KOF 2024 - Afana Samantha"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full px-10 pb-10 z-10">
        <div className="flex flex-col gap-4 max-w-screen-xl mx-auto">
          {/* Top label */}
          <div className="flex items-center text-sm">
            <span className=" px-2 py-1 font-[var(--font-gloock)] text-black" style={{border:'2px solid #FFC500',backgroundColor:'#FFC500'}}>
              MISS KOF
            </span>
            <span className=" px-2 py-1 font-[var(--font-gloock)] text-light" style={{border:'2px solid #FFC500'}}>
              2024
            </span>
          </div>
            <div style={{display:'flex'}}>
                <h1 className="text-5xl md:text-6xl font-semibold font-[var(--font-volgarie)]">
                Afana Samantha
                </h1>

                {/* Stats */}
                <div
                className="flex gap-10 text-yellow-500 text-sm mt-4 font-[var(--font-volgarie)]"
                style={{ marginLeft: "auto" }}
                >
                <div>
                    <span className="block text-2xl font-bold">89%</span>
                    <span className="text-xs text-white">lorem</span>
                </div>
                <div>
                    <span className="block text-2xl font-bold">500+</span>
                    <span className="text-xs text-white">ipsum</span>
                </div>
                <div>
                    <span className="block text-2xl font-bold">1.4m</span>
                    <span className="text-xs text-white">dolor</span>
                </div>
                </div>
            </div>
          {/* Name */}
          
        </div>
      </div>
    </section>
  );
}
