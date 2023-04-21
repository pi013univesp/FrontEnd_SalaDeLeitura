import React, { useState } from "react";
import "../App.css";
import api from "../service/api";

const CadastroForm = () => {

  async function enviarFormulario(event) {
    console.log("exemplo")
    event.preventDefault();
    const dados = {
      name: event.target.name.value,
      address: event.target.address.value,
      email: event.target.email.value,
      senha: event.target.password.value,
    };
    try {
      await api.post('/library/register', dados);

      alert('Cadastro concluído!');
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className="formulario">
      <div className="centralizar">
        <center>
          <h2>Cadastro</h2>
          <form onSubmit={enviarFormulario} >
            <input type="text" placeholder="Nome" id="name" required />
            <input type="text" placeholder="Endereço" id="address" required />
            <input type="text" placeholder="Email" id="email" required />
            <input type="password" placeholder="Senha" id="password" required />
            <button className="botao1" type="submit">
              Cadastrar
            </button>
          </form>
        </center>
      </div>
    </div>
  );
}

export default CadastroForm;
