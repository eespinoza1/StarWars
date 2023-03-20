import React, {useState} from 'react'
import Button from "@mui/material/Button"



export default function Search({cardLocation, search}) {
  const [input, setInput]= useState("")

  const hadleChange = (e)=>{
    e.preventDefault();  
setInput(e.target.value)

  }
  return (
    <div>
      <input
      type="text"
      name="username"
      value={input.username}
      onChange={(e)=>hadleChange(e)}
      ></input>
      <Button variant="contained" color="success" 
      onClick={()=> search(input, cardLocation)}>Search</Button>
    </div>
  )
}
