import React from "react";
import "./styles.css";

const Header = ({ setStart }) => {
  return (
    <header className="header">
      <div className="header-container">
        <img src="./Nu Kenzie.png" alt="Logo" />
        <button onClick={() => setStart(false)}>Início</button>
      </div>
    </header>
  );
};

export default Header;
