import React from 'react'

export default function Tests() {
  return (
    <div style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div style={{
        zIndex:0,
        opacity:0,
        objectFit:'cover',
        width:'100%',
        maxWidth:'none',
        height:'100%',
        position:'absolute',
        top:0,
        left:0
      }}>
        <img 
          src='/assets/images/joker1.png'
          alt='joker'
          style={{flex:1}}
        />
      </div>
        
    </div>
  )
}
