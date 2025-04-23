import localFont from "next/font/local";

export const rockwell = localFont({
  src: "../../../public/fonts/Rockwell-ExtraBold.otf",
  weight: "800",
  style: "normal",
  display: "swap",
  variable: "--font-rockwell",
});

export const wildwolf = localFont({
  src: "../../../public/fonts/Wild-Wolf.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-wild-wolf",
});
