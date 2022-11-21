import React from "react";

const Login = ({setStart}) => {
  return (
    <div>
      <div>
        <img src="./Nu Kenzie.png" alt="Logo" />
        <h2>Centralize o controle das suas finanças</h2>
        <p>de forma rápida e segura</p>
        <button onClick={() => setStart(true)}>Iniciar</button>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Login;
