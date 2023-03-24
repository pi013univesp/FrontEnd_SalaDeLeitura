import React, { useState } from "react";
import "../App.css";

class LoginForm extends React.Component {
  render() {
    return (
      <div className="formulario">
        <div className="centralizar">
          <center>
            <h2>Login</h2>
            <form>
              <input type="text" placeholder="Nome" required/>
              <input type="password" placeholder="Senha" required />
              <button className="botao1" type="submit" value="Submit" href="#">
                Logar
              </button>
            </form>
          </center>
        </div>
      </div>
    );
  }
}

export default LoginForm;
