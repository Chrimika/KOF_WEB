import React from "react";
import SubHeader from "./components/tentacules/subHeader";
import { ArticleCard } from "./components/ActualityCard";
import { ToTheFestivalSection } from "./components/footer/toThefestivalSection";
import { FooterLight } from "./components/footer/KOFFooter";

const IMAGE_LIST = [
  {
    src: "/actualite/648598c4a4cc217bb5fc271e34c60946dcc6476c.jpg",
    title: "Un titre interessant pour un article",
  },
  {
    src: "/actualite/a81ff272b261a38862d7bc4e1733d04a9cf87cd7.jpg",
    title: "Un titre interessant pour un article",
  },
  {
    src: "/actualite/c7ed92963932916021314a751948f08cd7a29075.jpg",
    title: "Un titre interessant pour un article",
  },
  {
    src: "/actualite/d1193badfea3f02bb1a6c84efa5f31b8bfa68a79.jpg",
    title: "Un titre interessant pour un article",
  },
  {
    src: "/actualite/d28292b9537097b6a9b57e2e21e24734dcecb5e7.jpg",
    title: "Un titre interessant pour un article",
  },
  {
    src: "/actualite/d1193badfea3f02bb1a6c84efa5f31b8bfa68a79.jpg",
    title: "Un titre interessant pour un article",
  },
  {
    src: "/actualite/e2bcf4904be82f9681d94e674da964ba3d2b05bd.jpg",
    title: "Un titre interessant pour un article",
  },
  {
    src: "/actualite/d1193badfea3f02bb1a6c84efa5f31b8bfa68a79.jpg",
    title: "Un titre interessant pour un article",
  },
  {
    src: "/actualite/d1193badfea3f02bb1a6c84efa5f31b8bfa68a79.jpg",
    title: "Un titre interessant pour un article",
  },
];

type Props = {};

const Actualite = (props: Props) => {
  return (
    <>
      <SubHeader />
      <div className="h-full w-full bg-[#FF8C00] p-[55px] grid grid-cols-3 gap-4 mt-25">
        {IMAGE_LIST.map((image, index) => (
          <ArticleCard key={index} src={image.src} title={image.title} />
        ))}
      </div>
      <div className="h-[243px]" />
      <ToTheFestivalSection />
      <FooterLight />
    </>
  );
};

export default Actualite;
