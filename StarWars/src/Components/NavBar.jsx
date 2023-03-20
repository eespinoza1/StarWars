import React from 'react'
import "./NavBar.css"
import Search from './Search'
import Random from './Random'

import Button from "@mui/material/Button"



export default function NavBar({search, addList, random}) {
  return (
    <div className='navBar'>

      <Search search={search} cardLocation="left"/>
      <Random random={random} cardLocation="left"/>

    <Button variant="contained" color="success" onClick={addList} >All Characters</Button>

    <Search search={search} cardLocation="right"/>
      <Random random={random} cardLocation="right"/>


</div>

  )
}
