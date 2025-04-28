"use client";
import { rockwell } from "../actualite/font";

const articles = [
  {
    id: 1,
    img: "/img/test/good.jpg",
    title: "Un titre accrocheur pour l'article, pas trop long",
  },
  {
    id: 2,
    img: "/img/test/good2.jpg",
    title: "Un titre accrocheur pour l'article, pas trop long",
  },
  {
    id: 3,
    img: "/img/test/good3.jpg",
    title: "Un titre accrocheur pour l'article, pas trop long",
  },
  {
    id: 4,
    img: "/img/test/good4.jpg",
    title: "Un titre accrocheur pour l'article, pas trop long",
  },
];

const ActualitesContent = () => {
  return (
    <section className="bg-[#FF8C00] mt-16 lg:mt-[22.5vh] px-4 lg:px-[10%] pb-16 lg:pb-[20vh] overflow-hidden">
      <header className="h-64 lg:h-[32.5vw] scale-100 lg:scale-[1.27] translate-y-0 lg:translate-y-[7.5%] relative">
        <h3
          className={`${rockwell.className} text-center pt-16 lg:pt-[9vmax] z-[9] text-[#0A1E00] uppercase text-5xl lg:text-[7.5vmax] m-0 leading-[0.9]`}
        >
          Actua<span>lités</span>
        </h3>

        <img
          src="/img/asset/tentacle-top.svg"
          alt="Tentacle top"
          className="absolute left-1/2 lg:left-[60%] top-0 h-48 lg:h-[50vh] transform -translate-x-1/2 -translate-y-1/4 lg:-translate-y-[15%]"
        />
        <img
          src="/img/asset/tentacle-left.svg"
          alt="Tentacle left"
          className="absolute left-0 top-24 lg:top-[15vh] w-3/4 lg:w-[40vw] transform -translate-x-1/4 lg:-translate-x-[15%]"
        />
        <img
          src="/img/asset/tentacle-right.svg"
          alt="Tentacle right"
          className="absolute top-32 lg:top-[20vh] right-0 w-full lg:w-[50vw] transform translate-x-1/4 lg:translate-x-[15%]"
        />
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[5vh_2.33%]">
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </section>
  );
};

const ArticleCard = ({ img, title }: { img: string; title: string }) => {
  return (
    <a
      href="#"
      className="block w-full aspect-[3/4] lg:aspect-[2/3] relative group transition-all duration-300"
    >
      <div className="h-full w-full rounded-2xl lg:rounded-[3vmax] overflow-hidden">
        <img
          src={img}
          alt="Article"
          className="w-full h-full object-cover filter grayscale contrast-150 group-hover:grayscale-0 group-hover:contrast-115 group-hover:scale-105 transition-all duration-300"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full px-4 lg:px-[10%] py-6 lg:py-[5vh] flex items-end z-[5]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#FF8C00]/80 to-transparent rounded-b-2xl lg:rounded-b-[2.9vmax] group-hover:grayscale group-hover:brightness-0 transition-all duration-300" />

        <img
          src="/icon/play.svg"
          alt="Play"
          className="absolute bottom-4 lg:bottom-[15%] right-4 lg:right-[5%] h-6 lg:h-[3vh] aspect-square z-[5]"
        />
        <h6
          className={`${rockwell.className} relative z-[6] text-white text-sm lg:text-[1.25vmax] m-0 mb-2 lg:mb-[1vmax] text-shadow group-hover:text-[#FF8C00] transition-all duration-300`}
        >
          {title}
        </h6>
      </div>
    </a>
  );
};

export default ActualitesContent;
