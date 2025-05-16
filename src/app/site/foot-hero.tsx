import { Inter } from 'next/font/google'
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export default function FootHero() {
  return (
    <div className={inter.className} style={{
      backgroundColor: '#FF8C00',
      flex: 3,
      display: 'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    }}>
      <div style={{
      flex: 0.4,
      display: 'flex',
      justifyContent: 'center',
      backgroundImage: `url("/assets/images/down.png")`,
      width:'63%',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center',
      backgroundSize: 'contain',
    }}>
      <Image
        src="/assets/images/down.png"
        alt="Down"
        width={200} 
        height={200}
        style={{ objectFit: 'contain' }}
      />
    </div>
      <div style={{flex:0.6,display:'flex',alignItems:'center',justifyContent: 'center',backgroundColor:'red',width:'100%',fontWeight:'bold',fontSize:30,padding:'50px 0'}}>
        05 Août - August 2025
      </div>
    </div>
  );
}