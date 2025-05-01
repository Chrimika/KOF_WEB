"use client";
import { useState, useEffect } from "react";
import { rockwell, wildwolf } from "../actualite/font";

const InvolveSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const endDate = new Date("2023-08-05T10:00:00");
      const now = new Date();
      const diff = endDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 lg:py-[20vmax] text-center">
      <div className="border border-black p-6 lg:p-[4vmax] w-full lg:w-[70%] mx-auto flex flex-wrap justify-between">
        <CountdownItem value={timeLeft.days} label="jrs" />
        <CountdownItem value={timeLeft.hours} label="hrs" />
        <CountdownItem value={timeLeft.minutes} label="mins" />
        <CountdownItem value={timeLeft.seconds} label="secs" />
      </div>

      <h4
        className={`${wildwolf.className} text-4xl lg:text-[4.5em] mt-8 lg:mt-[5vmax] font-light`}
      >
        Jusqu'au festival
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

const CountdownItem = ({ value, label }: { value: number; label: string }) => (
  <div className="w-1/2 sm:w-1/4 lg:w-[15%] text-center my-4 lg:my-0">
    <div className="text-3xl lg:text-[7vmin] font-light">
      {Math.floor(value)}
    </div>
    <div className="text-xs lg:text-sm uppercase font-semibold mt-1">
      {label}
    </div>
  </div>
);

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  return (
    <form className="mt-12 lg:mt-[10vmax] max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-0 mx-10">
        <input
          type="email"
          placeholder="Votre Adresse Mail"
          className="flex-grow px-4 py-3 lg:px-[4vmax] lg:py-[2vmax] border border-gray-300 lg:w-[623px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className={`${rockwell.className} px-6 py-3 lg:px-[4vmax] lg:py-[2vmax] bg-[#0A1E00] text-[#FF0000] uppercase  hover:bg-[#FF8C00] hover:text-[#0A1E00] transition-colors lg:w-[540px]`}
        >
          S'abonner
        </button>
      </div>
    </form>
  );
};

export default InvolveSection;
