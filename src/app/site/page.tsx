import Countdown from "./Rebours";
import Billet from "./billet";
import Partners from "./partners";
import Galery from "./galery";
import Info from "./info";
import FootHero from "./foot-hero";
import Paragraphe from "./paragraphe";
import Hero from "./hero";
import Header from "./header";
import NewsletterForm from "./InvolveSection";

export default function HomeScreen() {
  

  return (
    <div style={{backgroundColor:'#fff', position: 'relative'}}>
      <Header />
      <Hero />
      <Paragraphe />
      <FootHero />
      <Info />
      <Galery />
      <Partners />
      <Billet />
      <Countdown />
      <NewsletterForm />    
    </div>
  );
}