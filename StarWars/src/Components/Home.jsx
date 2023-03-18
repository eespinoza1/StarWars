import React from 'react'
import Cards from "./Cards"
import NavBar from "./NavBar"
import List from "./List"
import "./Home.css"

export default function Home() {
  return (
    <div className='home'>
      <h1>home</h1>
   
      <NavBar/>
      <Cards/>
      <div className='list'>
      <List/>

      </div>
    
    </div>
  )
}
