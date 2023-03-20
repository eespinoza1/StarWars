import React, { useState } from "react";
import Cards from "./Cards";
import NavBar from "./NavBar";
import List from "./List";
import "./Home.css";

export default function Home({ allCharacters }) {
  // console.log(allCharacters);
  const [chars, setChars] = useState({
    cardLeft: {},
    cardRight: {},
  });
  const [listC, setListC] = useState([]);

  //funcion de busqueda
  const search = function (name, cardLocation) {
    const findCharacter = allCharacters.find((c) => c.name === name);
    if (cardLocation === "left") {
      setChars({ ...chars, cardLeft: findCharacter });
    }
    if (cardLocation === "right") {
      setChars({ ...chars, cardRight: findCharacter });
    }
  };

  const addList = function () {
    if (listC.length === 0){
    setListC(allCharacters)
    }else{
      setListC([])
    }
  };

  const random = function (cardLocation) {
    function getNumRandom(max) {
      return Math.floor(Math.random() * max);
    }
    const idRandom = getNumRandom(87) + 1;
    const findCharacter = allCharacters.find((c) => c.id === idRandom);
    if (cardLocation === "left") {
      setChars({ ...chars, cardLeft: findCharacter });
    }
    if (cardLocation === "right") {
      setChars({ ...chars, cardRight: findCharacter });
    }
  };

  return (
    <div className="home">
      <NavBar search={search} addList={addList} random={random} />
      <h1 className="fonti">Atemption: Star Wars Battle</h1>
      <Cards characters={chars} />
      <div className="list">
        <List lista={listC} />
      </div>
    </div>
  );
}
