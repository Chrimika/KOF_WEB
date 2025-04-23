import React from "react";
import { rockwell } from "../font";

type Props = {};

export const Title = (props: Props) => {
  return (
    <div
      className="relative text-center uppercase leading-[100%] tracking-[0%]
 align-middle"
    >
      {/* Calque rouge/orange - décalé en bas à droite */}
      <div
        className={`${rockwell.className} absolute inset-0 font-extrabold text-[178.31px] text-[#D40000]`}
        style={{
          transform: "translate(-16px, -19px)",
          color: "transparent",
          WebkitTextStroke: "2px #0A1E00",
        }}
      >
        ACTUALITE
      </div>

      {/* Calque blanc - décalé en haut à gauche */}
      <div
        className={`${rockwell.className} absolute inset-0 font-extrabold text-[178.31px] text-amber-300 `}
        style={{
          transform: "translate(16px, 19px)",
          color: "transparent",
          WebkitTextStroke: "2px #0A1E00",
        }}
      >
        ACTUALITE
      </div>

      {/* Calque principal noir foncé - centré */}
      <div
        className={`${rockwell.className} relative font-extrabold text-[178.31px] text-[#0A1E00]`}
      >
        ACTUALITE
      </div>
    </div>
  );
};
