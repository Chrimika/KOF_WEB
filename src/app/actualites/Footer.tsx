const Footer = () => {
  const navSections = [
    ["Programme", "Billeterie", "Actualités", "Infos. Pratiques"],
    ["Awards", "Activités", "Hallyu", "Concerts"],
    ["Partenariat", "Espaces", "Bénévoles", "Sponsoring"],
    ["Média - Presse", "À Propos", "Organisation", "Contacter"],
  ];

  const socials = [
    "Youtube",
    "Instagram",
    "Facebook",
    "Twitter",
    "Whatsapp",
    "Spotify",
    "Twitch",
  ];

  return (
    <footer className="mt-16 lg:mt-[5vmax] lg:hidden">
      <div className="relative bg-[#0A1E00] lg:bg-[#FF0000] px-6 lg:px-[12%] py-8 lg:py-[4vmax]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
            <img
              src="/img/group-logo-shaded.png"
              alt="Logo"
              className="h-16 lg:h-auto mb-8 lg:mb-0 lg:w-48"
            />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full lg:w-auto">
              {navSections.map((section, i) => (
                <nav key={i} className="mb-6 lg:mb-0">
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
        <div className="flex justify-center space-x-4 lg:space-x-6">
          {socials.map((social) => (
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

      <div className="pb-8 lg:pb-12 text-center text-xs lg:text-sm text-gray-600">
        <p>
          &copy; Copyright k-mer otaku festival 2023 | All rights reserved |
          Design by{" "}
          <a href="#" className="underline">
            Yoko
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
