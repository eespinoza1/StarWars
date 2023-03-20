import React from 'react'

export default function List({lista}) {
  return (
    <div>
      {lista.length>0 ?
      lista.map((c)=>{
        return(
            <h1 key={c.id}>{c.name}</h1>
        )
      })
      :null
      }
      
    </div>
  )
}
