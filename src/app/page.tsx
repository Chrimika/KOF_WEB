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



export default function Home() {
  return (
    <div>
      <div style={{display:'flex',flexDirection:'column',height:'100vh' }}>
          <Header />
          <Hero />
          <Paragraphe />
          <FootHero />
        </div>
        <div style={{display:'flex'}}>
          <Info />
        </div>
        <div style={{display:'flex'}}>
          <Galery />
        </div>
        <div style={{display:'flex'}}>
          <Partners />
        </div>
        <div style={{display:'flex'}}>
          <Billet />
        </div>
        <div style={{display:'flex',margin:'15px 0'}}>
          <Countdown />
        </div>
        <div style={{display:'flex',marginBottom:30,height:'100vh'}}>
          <NewsletterForm />
        </div>
        
    </div>
  );
}