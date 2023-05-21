import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import "../App.css";
import api from "../service/api";

const CadastroForm = () => {
  const [userRedirect, setUserRedirect] = useState(false)
  async function enviarFormulario(event) {
    event.preventDefault();
    const dados = {
      name: event.target.name.value,
      address: event.target.address.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    try {
      const response = await api.post('/library/register', dados);
      if(response.status === 201){
        alert('Cadastro concluído!');
        setUserRedirect(!userRedirect)
      }
      
    } catch (e) {
      
      if(e.response.status === 400){
        alert(`${e.response.data.message}`)
      }

      console.log(e)
    }
  }

  if(userRedirect){
    return (<Navigate replace to='/login'/>) 
  } else {
    return (
      <div className="formulario">
        <div className="centralizar">
          <center>
            <h2>Cadastro</h2>
            <br/>
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
}

export default CadastroForm;
