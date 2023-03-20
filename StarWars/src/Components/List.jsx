import React from 'react'
import "./List.css"

export default function List({lista}) {
  return (
    <div >
      {lista.length>0 ?
      lista.map((c)=>{
        return(
            <h1 className='diver' key={c.id}>{c.name}</h1>
        )
      })
      :null
      }
      
    </div>
  )
}
