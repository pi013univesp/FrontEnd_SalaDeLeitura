import React, { useState } from "react";
import "../App.css";

class CadastroForm extends React.Component {
  render() {
    return (
      <div className="formulario">
        <div className="centralizar">
          <center>
            <h2>Cadastro</h2>
            <form>
              <input type="text" placeholder="Nome" required />
              <input type="password" placeholder="Senha" required />
              <button className="botao1" type="submit" value="Submit" href="#">
                Cadastrar
              </button>
            </form>
          </center>
        </div>
      </div>
    );
  }
}

export default CadastroForm;
