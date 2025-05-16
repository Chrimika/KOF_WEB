"use client";
import { useState } from "react";
import { rockwell, wildwolf } from "../actualite/font";

const InvolveSection = () => {
  return (
    <section className=" text-center" style={{marginBottom:150,marginTop:100}}>

      <h4
        className={`${wildwolf.className} text-4xl lg:text-[4.5em] mt-8 lg:mt-[5vmax] font-light`}
      >
        Jusqu’au festival
      </h4>

      <p className="w-full lg:w-[60%] mx-auto text-center text-base lg:text-lg mt-6 lg:mt-8">
        Ne manquez rien de cette édition du K-mer Otaku Festival, où vous vivrez
        une expérience mémorable en explorant l&apos;univers fascinant de la
        culture pop asiatique. Nous sommes impatients de vous accueillir et de
        partager ensemble cette aventure extraordinaire !
      </p>

      <NewsletterForm />
    </section>
  );
};

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  return (
    <form className="mt-12 lg:mt-[10vmax] max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-0">
        <input
          type="email"
          placeholder="Votre Adresse Mail"
          className="flex-grow px-4 py-3 lg:px-[4vmax] lg:py-[2vmax] border border-gray-300 lg:w-[623px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="lg:hidden mt-2"></div>
        <button
          type="submit"
          className={`${rockwell.className} px-6 py-3  lg:px-[4vmax] lg:py-[2vmax] bg-[#0A1E00] text-[#FF0000] uppercase  hover:bg-[#FF8C00] hover:text-[#0A1E00] transition-colors lg:w-[540px]`}
        >
          S’abonner
        </button>
      </div>
    </form>
  );
};

export default InvolveSection;
