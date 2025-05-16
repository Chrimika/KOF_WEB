import React from "react";



const SubHeader = () => {
  return (
    <div className="relative mt-[400px]  w-screen h-fit">
      {/* Tentacule gauche, à gauche */}
      <img
        src="/actualite/left_tentacule.png"
        alt="tentacule gauche"
        className="absolute left-[-100px] bottom-[-100] z-0 w-[600px] h-[248.99px] "
      />

      {/* Tentacule du milieu, au centre */}
      <img
        src="/actualite/midle_tentacule.png"
        alt="tentacule milieu"
        className="absolute left-1/2 bottom-[-400px] transform  z-0 w-[283px] h-[594px] "
      />

      {/* Tentacule droite, à droite */}
      <img
        src="/actualite/right_tentacule.png"
        alt="tentacule droite"
        className="absolute right-0 bottom-[-100px] z-0 w-[376px] h-[248.99px] "
      />
    </div>
  );
};

export default SubHeader;
