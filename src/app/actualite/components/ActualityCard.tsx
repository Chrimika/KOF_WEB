import { PlayIcon } from "lucide-react";
import React from "react";

export const ArticleCard = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className="w-[464px] h-[496px] mb-30">
      <div className="relative w-full h-full p-0">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover rounded-4xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FF8C00] from-[5%] to-transparent to-100%" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center w-[392px]">
          <h3 className="text-white text-2xl font-bold z-10 text-center mb-2">
            {title}
          </h3>
          <div className="flex flex-row w-full justify-end">
            <PlayIcon className="text-white fill-white rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};
