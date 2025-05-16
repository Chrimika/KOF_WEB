"use client"

import { useRouter } from "next/navigation";
import React from 'react'

export default function Billet() {
    const router = useRouter();
  return (
    <div style={{
        flex: 0.8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20vh',
        backgroundImage: `url("/assets/images/billet.png")`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'contain',
        width:'100%',
        margin:'0 auto'
        
      }}
      
      onClick={() => {
                router.push("/billeterie");
              }}>

      </div>
  )
}
