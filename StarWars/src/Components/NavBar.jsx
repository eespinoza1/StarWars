import React from 'react'
import "./NavBar.css"
import Search from './Search'
import Random from './Random'

import Button from "@mui/material/Button"



export default function NavBar() {
  return (
    <div className='navBar'>

      <Search />
      <Random />
    <Button variant="contained" color="success" >All Characters</Button>

      <Search />
      <Random />


</div>

  )
}
