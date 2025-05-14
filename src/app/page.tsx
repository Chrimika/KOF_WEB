import Image from "next/image";
import Countdown from "./Rebours";
import Billet from "./billet";
import Partners from "./partners";
import Galery from "./galery";
import Info from "./info";
import FootHero from "./foot-hero";
import Paragraphe from "./paragraphe";
import Hero from "./hero";
import Header from "./header";
import NewsletterForm from "./InvolveSection"
import { FooterLight } from "./actualite/components/footer/KOFFooter";
import Footer from "./actualites/Footer";

export default function Home() {
  return (
    <div>
      <div style={{display:'flex',flexDirection:'column',height:'100vh' }}>
          <Header />
          <Hero />
          <Paragraphe />
          <FootHero />
        </div>
        <div style={{display:'flex',height:'100vh'}}>
          <Info />
        </div>
        <div style={{display:'flex',height:'90vh'}}>
          <Galery />
        </div>
        <div style={{display:'flex',height:'40vh'}}>
          <Partners />
        </div>
        <div style={{display:'flex',height:'50vh'}}>
          <Billet />
        </div>
        <div style={{display:'flex',height:'20vh',margin:15}}>
          <Countdown />
        </div>
        <div style={{display:'flex',height:'80vh'}}>
          <NewsletterForm />
        </div>
        
    </div>
  );
}