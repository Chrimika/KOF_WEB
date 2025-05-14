import Billet from "./billet";
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
import './globals.css';
import Footer from "./actualites/Footer";
import { FooterLight } from "./actualite/components/footer/KOFFooter";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="flex flex-col min-h-screen" style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
        <Header />
          {children}
          <FooterLight />
        <Footer />
      </body>
    </html>
  );
}

