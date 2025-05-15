import Actualites from "./Actualite";
import AfanaSamantha from "./AfanaSamantha";
import Comite from "./Comite";
import Header from "./Header";
import MissKofHero from "./hero";
import Legend from "./Legend";
import MissKofLandingPage from "./MissKofLandingPage";
import Store from "./Store";

export default function MissKOF() {
  return (
    <div className="flex flex-col min-h-screen" style={{backgroundColor:'#000'}}>
      <Header />
      <MissKofHero />
      <Legend />
      <Comite />
      <AfanaSamantha/>
      <MissKofLandingPage />
      <Actualites/>
      <Store />
    </div>
  );
}

