"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import ProductGrid from './Produits';

const Store = () => {
    return(
        <div style={{color:'white'}}>
            <div>
                <Image
                src="/assets/images/store-title.svg"
                width={200}
                height={100}
                alt="title"
                className="object-cover"
                priority
                style={{margin:'30px auto'}}
            />
                <p style={{ margin: '30px auto', width:'60%',textAlign:'center' }}>
                    Praesent velit bibendum tristique non molestie integer lorem. Nec gravida dignissim arcu in. Leo rhoncus amet tellus dui viverra porttitor senectus. Viverra id mauris nulla tempus.        
                </p>
            </div>
            <div style={{width:'100%',backgroundColor:'#FFC500',height:60,display:'flex',justifyContent:'center',alignItems:'center',padding:'0 15px'}}>
                
                <p style={{ margin: '30px auto', width:'70%',textAlign:'center',color:'black',fontSize:14,display:'flex',alignItems:'center' }}>
                    <img
                 src='/assets/images/notice.svg'
                 alt='note'
                />  Beneficiez d’une réduction de jusqu'à 40% sur tous vos articles acheter dans notre boutique avant et pendant le KOF - 3 semaines restantes                </p>
                 <img
                 src='/assets/images/commot.svg'
                 alt='note'
                /> 
            </div>
            <ProductGrid />
        </div>
    )
}

export default Store;