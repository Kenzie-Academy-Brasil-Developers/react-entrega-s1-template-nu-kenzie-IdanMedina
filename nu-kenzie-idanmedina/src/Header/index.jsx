import React from "react";

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
