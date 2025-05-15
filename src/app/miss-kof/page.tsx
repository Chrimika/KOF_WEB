import Actualites from "./Actualite";
import AfanaSamantha from "./AfanaSamantha";
import Comite from "./Comite";
import MissKofHero from "./hero";
import Legend from "./Legend";
import MissKofLandingPage from "./MissKofLandingPage";
import Store from "./Store";

export default function MissKOF() {
  return (
    <div className="flex flex-col min-h-screen" style={{backgroundColor:'#000'}}>
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

