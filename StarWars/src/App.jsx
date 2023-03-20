import { useEffect, useState } from 'react'
import axios from "axios"

import './App.css'
import Home from "./Components/Home"

function App() {
const [characters, setCharacters] = useState([])

async function getAllCharacters(){
  const allData = await axios.get("https://akabab.github.io/starwars-api/api/all.json")
// console.log(allData);
setCharacters(allData.data)
}
useEffect(()=>{
  getAllCharacters();
}, [])

  return (
    <div className="App">
     <Home allCharacters={characters}/>
    </div>
  )
}

export default App
