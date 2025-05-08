import Billet from "./billet";
import FestivalCountdown from "./festival";
import FootHero from "./foot-hero";
import Galery from "./galery";
import Header from "./header";
import Hero from "./hero";
import Info from "./info";
import Home from "./page";
import Paragraphe from "./paragraphe";
import Partners from "./partners";
import Countdown from "./Rebours";
import Scan from "./Scan";
import App from "./Scan";

export default function RootLayout() { 
  return (
    <html>
      <body style={{padding:0,margin:0,display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',flexDirection:'column',height:'100vh' }}>
          <Header />
          <Hero />
          <Paragraphe />
          <FootHero />
        </div>
        <div style={{display:'flex',height:'100vh'}}>
          <Info />
        </div>
        <div style={{display:'flex',height:'100vh'}}>
          <Galery />
        </div>
        <div style={{display:'flex',height:'100vh'}}>
          <Partners />
        </div>
        <div style={{display:'flex',height:'50vh'}}>
          <Billet />
        </div>
        <div style={{display:'flex',height:'20vh'}}>
          <Countdown />
        </div>
        <div style={{display:'flex',height:'20vh'}}>
          <FestivalCountdown />
        </div>
      </body>
    </html>
  );
}
