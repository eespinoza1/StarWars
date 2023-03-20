import React from 'react'
import Cardx from './Cardx'
import "./Cards.css"

export default function Cards({characters}) {

  const left = characters.cardLeft.name ? characters.cardLeft : null;
  const right = characters.cardRight.name ? characters.cardRight : null; 


  return (
    <div className='cards'>
      <Cardx character={left}/>
      <Cardx character={right}/>
     
    </div>
  )
}



