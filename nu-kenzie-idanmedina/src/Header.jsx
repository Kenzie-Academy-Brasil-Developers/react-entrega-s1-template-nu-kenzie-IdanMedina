import React from "react";

const Header = ({setStart}) => {
  return (
    <header>
    <img src="./Nu Kenzie.png" alt="Logo"/>
    <button onClick={() => setStart(false)}>Início</button>
        </header>
  )
}

export default Header
