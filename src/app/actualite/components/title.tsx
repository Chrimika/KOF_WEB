import React from "react";
import { rockwell } from "../font";


export const LargeScreenTitle = () => {
  return (
    <h3 className="hidden sm:flex relative justify-center items-center pt-16 sm:pt-[9vmax] z-[9] uppercase text-5xl sm:text-[178px] leading-[0.9] tracking-widest">
      {/* Outline layer 1 */}
      <span
        className={`${rockwell.className} absolute text-transparent`}
        style={{
          WebkitTextStroke: "2px #0A1E00",
        }}
      >
        <span className="relative left-[15px] top-[20px]">Actualités</span>
      </span>

      {/* Outline layer 2 */}
      <span
        className={`${rockwell.className} absolute text-transparent`}
        style={{
          WebkitTextStroke: "2px #0A1E00",
        }}
      >
        <span className="relative right-[10px] bottom-[27px]">Actualités</span>
      </span>

      {/* Filled layer */}
      <span className={`${rockwell.className} text-[#0A1E00]`}>Actualités</span>
    </h3>
  );
};

export const MobileScreentitle = () => {
  return (
    <div className="relative flex justify-center items-center pt-16  z-[9] uppercase text-5xl leading-[0.9] tracking-widest sm:hidden  w-full">
      {/* Outline layer 1 */}
      <span
        className={`${rockwell.className} absolute text-transparent`}
        style={{
          WebkitTextStroke: "2px #0A1E00",
        }}
      >
        <span className="relative left-[4px] top-[5px]">Actualités</span>
      </span>

      {/* Outline layer 2 */}
      <span
        className={`${rockwell.className} absolute text-transparent`}
        style={{
          WebkitTextStroke: "2px #0A1E00",
        }}
      >
        <span className="relative right-[4px] bottom-[5px]">Actualités</span>
      </span>

      {/* Filled layer */}
      <span className={`${rockwell.className} text-[#0A1E00]`}>Actualités</span>
    </div>
  );
};
