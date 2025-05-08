import { Inter } from 'next/font/google'
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

export default function Info() {
  return (
    <div className={inter.className} style={{
      flex:1,
      display: 'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      backgroundImage: `url("/assets/images/sec2bg.png")`,
      height:'100vh'
    }}>
        <div style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center',height:'100vh',flexDirection:'column'}}>
          <div style={{display:'flex', flex:0.8,width:'100%', alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
              <div style={{width:109, height:43,backgroundColor:'red',backgroundImage: `url("/assets/images/a.png")`,WebkitBackgroundSize:'contain'}}>
              </div>
              <div style={{width:109, height:43,border:'1px solid white',marginTop:15,backgroundImage: `url("/assets/images/b.png")`,WebkitBackgroundSize:'contain'}}>
                
              </div>
              <div style={{width:109, height:43,marginTop:15,backgroundImage: `url("/assets/images/c.png")`,WebkitBackgroundSize:'contain',border:'1px solid white'}}>
                
              </div>
              <div style={{width:109, height:43,marginTop:15,backgroundImage: `url("/assets/images/d.png")`,WebkitBackgroundSize:'contain',border:'1px solid white'}}>
                
              </div>
          </div>
          <div style={{flex:0.2,width:'100%',backgroundImage: `url("/assets/images/gate.png")`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'contain'}}>

          </div>
        </div>
        <div style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
          <div style={{width:'80%'}}>
            <div style={{width:'100%',height:'35vh',backgroundImage: `url("/assets/images/maps.png")`,backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>

            </div>
            <div style={{padding:8,color:'white', fontSize:'0.7rem',lineHeight:1.7,fontWeight:'lighter'}}>
              Le K-mer Otaku Festival (KOF) est un événement unique célébrant la culture otaku au Cameroun. Rassemblant les passionnés de bandes dessinées, d'anime, de jeux vidéo, et de cosplay, le KOF offre une expérience inoubliable pour tous les fans de la culture pop asiatique.
              Organisé par une équipe dévouée et passionnée, le KOF met en avant le savoir-faire local, en offrant un espace pour les artistes, les créateurs et les gamers afin de s’épanouir comme jamais auparavant. Le festival propose des compétitions, des ateliers, des conférences...
            </div>
            <div style={{display:'flex'}}>
              <div style={{width:248,height:40,backgroundColor:'red',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'0.7rem',color:'white',borderRadius:10,marginLeft:'auto'}}><p>Nous découvrir</p></div>
            </div>
          </div>
        </div>
    </div>
  );
}