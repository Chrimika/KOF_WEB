import { satoshi } from "../actualite/font";

const Footer = () => {
  const navSections = [
    ["Programme", "Billeterie", "Actualités", "Infos. Pratiques"],
    ["Awards", "Activités", "Hallyu", "Concerts"],
    ["Partenariat", "Espaces", "Bénévoles", "Sponsoring"],
    ["Média - Presse", "À Propos", "Organisation", "Contacter"],
  ];

  const firstRowSocials = ["Youtube", "Instagram", "Facebook", "Twitter"];
  const secondRowSocials = ["Whatsapp", "Spotify", "Twitch"];

  return (
    <footer className="mt-16 lg:mt-[5vmax] lg:hidden">
      <div className="relative bg-[#0A1E00] lg:bg-[#FF0000] px-6 lg:px-[12%] py-8 lg:py-[4vmax]">
        <div className="container mx-auto">
          <div className="flex flex-col  justify-center items-center ">
            <div className="h-20">
              <img
                src="/img/group-logo-shaded.png"
                alt="Logo"
                className="h-[213px] relative bottom-35"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 w-full px-10">
              {navSections.map((section, i) => (
                <nav
                  key={i}
                  className={"flex flex-col " + (i % 2 != 0 ? "items-end" : "")}
                >
                  {section.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-white lg:text-current mb-3 lg:mb-4 text-sm lg:text-base hover:underline"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 lg:py-8 text-center">
        <div className="flex justify-around ">
          {firstRowSocials.map((social, index) => (
            <a
              key={social}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={`/icon/${social}.svg`}
                alt={social}
                className="h-6 w-6 lg:h-8 lg:w-8"
              />
            </a>
          ))}
        </div>
        <div className="flex justify-around mt-5">
          {secondRowSocials.map((social, index) => (
            <a
              key={social}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={`/icon/${social}.svg`}
                alt={social}
                className="h-6 w-6 lg:h-8 lg:w-8"
              />
            </a>
          ))}
        </div>
      </div>

      <div
        className={`${satoshi.className} pb-8 lg:pb-12 text-center text-[7.83px] lg:text-sm text-gray-600`}
      >
        <pre>
          &copy; Copyright k-mer otaku festival 2023 || All rights reserved ||
          Design by{" "}
          <a href="#" className="underline">
            Yoko
          </a>
        </pre>
      </div>
    </footer>
  );
};

export default Footer;
