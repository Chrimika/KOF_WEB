import React from "react";
import { go3v2, rockwell, satoshi } from "../../font";

const GradientSeparator = () => (
  <div className="w-full h-[4px] bg-gradient-to-r from-transparent via-white to-transparent" />
);

export const FooterLight = () => {
  const footerSections = [
    {
      title: "KOF Project",
      links: ["Le KOF", "Activités", "Actualités", "Team KOF", "Sponsors"],
    },
    {
      title: "KOF Branch",
      links: ["Hallyu", "Africa Cosplay League", "ComiKOF"],
    },
    {
      title: "KOF Shop",
      links: ["Billeterie", "Expo. stands", "Boutique ComiKOF"],
    },
  ];

  const socialIcons = [
    { src: "/actualite/youtube.png", alt: "YouTube" },
    { src: "/actualite/twitch.png", alt: "Twitch" },
    { src: "/actualite/insta.png", alt: "Instagram" },
    { src: "/actualite/facebook.png", alt: "Facebook" },
    { src: "/actualite/twiter.png", alt: "Twitter" },
    { src: "/actualite/whatsapp.png", alt: "Whatsapp" },
  ];

  return (
    <footer style={{backgroundImage: `url("/assets/images/footerBack.png")`,}} className={`${satoshi.className} w-full bg-[#ff0000] pt-20 pb-10 text-white`}>
      <div className="container mx-auto px-4 max-w-screen-xl">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + description */}
          <div className="flex flex-col items-start gap-2">
            <img src="/actualite/koflog.png" alt="Logo KOF" className="w-40 mb-2 object-contain" />
            <div className="text-[26.6px] font-normal">
              <div className={rockwell.className}>K-MER OTAKU</div>
              <div className={go3v2.className + " -mt-2"}>FESTIVAL</div>
            </div>
            <GradientSeparator />
            <p className="leading-5 text-base">
              Le plus grand évènement de la pop culture camerounaise.
            </p>
          </div>

          {/* Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h4 className="text-xl font-bold">{section.title}</h4>
              <GradientSeparator />
              <nav className="flex flex-col gap-2">
                {section.links.map((link, idx) => (
                  <a key={idx} href="#" className="text-base hover:underline">
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom part */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-12 gap-4 text-xs text-[#8f8f8f] opacity-80 bg-white py-4 px-6">
          <div className="flex flex-wrap items-center gap-2 justify-center text-center">
            <span>©2025 ‒ K-Mer Otaku Festival ‒ Tous droits réservés</span>
            <div className="w-1 h-1 bg-[#8f8f8f] rounded-sm" />
            <span>Termes d&apos;utilisation &amp; Politique de confidentialité</span>
            <div className="w-1 h-1 bg-[#8f8f8f] rounded-sm" />
            <span>reDesignEd by @joelfah</span>
          </div>

          <div className="flex items-center gap-4 justify-center">
            {socialIcons.map((icon, index) => (
              <a key={index} href="#" aria-label={icon.alt}>
                <img src={icon.src} alt={icon.alt} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
