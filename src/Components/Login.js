import React, { useState, useEffect } from "react";
import "../App.css";
import api from "../service/api";

const LoginForm = () => {
  const [usuario, setusuario] = useState([]);

  useEffect(
    () => {
      api.get('/library/login').then((response) => {
        setusuario(response.data);
      });
    }, []
  );
  console.log(usuario)

  return (
    <div className="formulario">
      <div className="centralizar">
        <center>
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Senha" required />
            <button className="botao1" type="submit" value="Submit">
              Logar
            </button>
          </form>
        </center>
      </div>
    </div>
  );
}

export default LoginForm;
