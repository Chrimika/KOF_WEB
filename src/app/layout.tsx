import FootHero from "./foot-hero";
import Header from "./header";
import Hero from "./hero";
import Info from "./info";
import Home from "./page";
import Paragraphe from "./paragraphe";
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
      </body>
    </html>
  );
}
