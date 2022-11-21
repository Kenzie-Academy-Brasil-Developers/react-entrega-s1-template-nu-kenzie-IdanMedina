import React from "react";

const Login = ({setStart}) => {
  return (
    <div className="login-body">
      <div id="logo-login">
        <img src="./Nu Kenzie w.png" alt="Logo" />
        <h2>Centralize o controle das suas finanças</h2>
        <p>de forma rápida e segura</p>
        <button id="start-btn" onClick={() => setStart(true)}>Iniciar</button>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Login;
