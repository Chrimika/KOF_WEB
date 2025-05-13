import React from "react";

export const KOFHeader = () => {
  return (
    <header className="flex items-center justify-between px-6 py-2.5 lg:px-25 w-full h-[75px] mt-[108px] ">
      <div className="flex items-center w-[160px] h-[70px]">
        <img
          className="w-[157px] h-[70px] object-cover"
          alt="K-mer Otaku Festival"
          src="/actualite/K-mer Otaku Festival Logo - White 1.png"
        />
      </div>

      <div className="relative w-[106px] h-[70px] overflow-hidden">
        <img
          className=" w-[105] h-[69px] object-cover"
          alt="Vector"
          src="/actualite/more.png"
        />
      </div>
    </header>
  );
};
