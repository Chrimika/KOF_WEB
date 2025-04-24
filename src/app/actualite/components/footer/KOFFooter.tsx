import { Separator } from "@/components/ui/separator";
import React from "react";
import { go3v2, rockwell, satoshi } from "../../font";

const GradientSeparator = () => {
  return (
    <div className="w-full h-[4px] bg-gradient-to-r from-transparent via-white to-transparent" />
  );
};

export const FooterLight = () => {
  // Footer navigation links data
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

  // Social media icons
  const socialIcons = [
    { src: "/actualite/youtube.png", alt: "YouTube" },
    { src: "/actualite/twitch.png", alt: "Twitch" },
    { src: "/actualite/insta.png", alt: "Instagram" },
    { src: "/actualite/facebook.png", alt: "Facebook" },
    { src: "/actualite/twiter.png", alt: "Twitter" },
    { src: "/actualite/whatsapp.png", alt: "Whatsapp" },
  ];

  return (
    <footer className={satoshi.className + " w-full max-w-[1920px]"}>
      <div className="relative h-[403px]">
        {/* Main footer content */}
        <div className="absolute w-full h-[403px] top-0 left-0">
          <div className="absolute w-full h-[275px] top-[70px] left-0 bg-[#ff0000] overflow-hidden">
            <div className="relative w-full max-w-[2160px] h-[274px] mx-auto">
              {/* Background pattern */}
              <div className="inline-flex items-center absolute top-0 left-0 opacity-[0.16]">
                <div className="relative w-[360px] h-[272.9px] overflow-hidden">
                  <div className="relative h-[273px]">
                    <img
                      className="absolute w-60 h-[273px] top-0 left-[120px]"
                      alt="Background pattern"
                      src="/group.png"
                    />
                  </div>
                </div>
                <div className=" relative w-[360px] h-[272.9px] bg-[100%_100%]" />
                <div className=" relative w-[360px] h-[272.9px] bg-[100%_100%]" />
                <div className=" relative w-[360px] h-[272.9px] bg-[100%_100%]" />
                <div className=" relative w-[360px] h-[272.9px] bg-[100%_100%]" />
                <div className="relative w-[360px] h-[272.9px] overflow-hidden">
                  <div className="relative h-[273px]">
                    <img
                      className="absolute w-60 h-[273px] top-0 left-0"
                      alt="Background pattern"
                      src="/group-5.png"
                    />
                  </div>
                </div>
              </div>

              {/* Festival title section */}
              <div className="flex flex-col w-[219px] h-[216px] items-start gap-2 absolute top-[30px] left-[657px]">
                <div className="flex flex-col h-[66px] items-start gap-2 relative self-stretch w-full">
                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div
                      className={
                        rockwell.className +
                        " relative self-stretch mt-[-1.00px] font-normal text-white text-[26.6px] tracking-[0] leading-[normal]"
                      }
                    >
                      K-MER OTAKU
                    </div>
                    <div
                      className={`${go3v2.className} relative self-stretch -mt-2 font-normal text-white text-[26.6px] tracking-[0] leading-[normal]`}
                    >
                      FESTIVAL
                    </div>
                  </div>
                  <GradientSeparator />
                </div>
                <p
                  className={
                    "leading-5 relative self-stretch font-normal text-white text-base tracking-[0]"
                  }
                >
                  Le plus grand évànement de la pop culture camerounaise.
                </p>
              </div>

              {/* Navigation sections */}
              {footerSections.map((section, index) => (
                <div
                  key={section.title}
                  className="flex flex-col w-[219px] h-[216px] items-start gap-2 absolute top-[30px]"
                  style={{ left: `${948 + index * 289}px` }}
                >
                  <div className="flex flex-col h-[66px] items-start justify-end gap-2 relative self-stretch w-full">
                    <div className="relative self-stretch font-bold text-white text-xl tracking-[0] leading-[normal]">
                      {section.title}
                    </div>
                    <GradientSeparator />
                  </div>
                  <nav className="flex flex-col w-[159px] items-start gap-2 relative flex-[0_0_auto]">
                    {section.links.map((link, i) => (
                      <a
                        key={i}
                        href="#"
                        className={` relative self-stretch  font-normal text-white text-base tracking-[0] leading-[normal] ${
                          i === 0 ? "mt-[-1.00px]" : ""
                        }`}
                      >
                        {link}
                      </a>
                    ))}
                  </nav>
                </div>
              ))}

              {/* Decorative image */}
              <img
                className="absolute w-[252px] h-[191px] top-[83px] left-[1650px]"
                alt="Decorative pattern"
                src="/actualite/left-logo-footer.png"
              />
            </div>
          </div>

          {/* Logo */}
          <img
            className="absolute w-[423px] h-[403px] top-0 left-[72px] object-cover"
            alt="K-mer otaku festival logo"
            src="/actualite/koflog.png"
          />
        </div>

        {/* Footer bottom section */}
        <div className="flex w-[1230px] items-center justify-between absolute top-[363px] left-[536px]">
          {/* Copyright and terms */}
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] opacity-80">
            <div
              className={
                "relative w-fit mt-[-1.00px]  font-normal text-[#8f8f8f] text-xs text-center tracking-[0] leading-[normal]"
              }
            >
              ©2025 ‒ K-Mer Otaku Festival ‒ Tous droits réservés
            </div>
            <div className="relative w-1 h-1 bg-[#8f8f8f] rounded-sm" />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#8f8f8f] text-xs text-center tracking-[0] leading-[normal]">
              Termes d&apos;utilisation &amp; Politique de confidentialité
            </div>
            <div className="relative w-1 h-1 bg-[#8f8f8f] rounded-sm" />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#8f8f8f] text-xs text-center tracking-[0] leading-[normal]">
              reDesignEd by @joelfah
            </div>
          </div>

          {/* Social media icons */}
          <div className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
            {socialIcons.map((icon, index) => (
              <a key={index} href="#" aria-label={icon.alt}>
                <img
                  className="relative w-6 h-6"
                  alt={icon.alt}
                  src={icon.src}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
