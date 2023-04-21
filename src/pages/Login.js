import React from "react";
import "../App.css";
import api from "../service/api";

const LoginForm = () => {

  const enviarFormulario = async (event) => {
    event.preventDefault();

    const dados = {
      email: event.target.email.value,
      password: event.target.senha.value,
    }

    try {
      const login = await api.post('/library/login', dados)
      
      if(login.status === 200){
        alert('Login efetuado')
      }

    } catch(e){
      console.log(e)
    }
  }

  return (
    <div className="formulario">
      <div className="centralizar">
        <center>
          <h2>Login</h2>
          <form onSubmit={enviarFormulario}>
            <input type="text" placeholder="Email" id="email" required />
            <input type="password" placeholder="Senha" id="senha" required />
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
