import { Inter } from 'next/font/google'
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

export default function Info() {
  return (
    <div className={inter.className} style={{
      flex:1,
      display: 'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      backgroundImage: `url("/assets/images/sec2bg.png")`,
    }}>
        <div style={{display:'flex',flex:1}}>

        </div>
        <div style={{display:'flex',flex:1}}>

        </div>
    </div>
  );
}