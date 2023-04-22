import React, {useState, useContext} from "react";
import { Navigate } from 'react-router-dom';
import "../App.css";
import api from "../service/api";

import BibliotecaContext from "../contexts/BibliotecaContext";

const LoginForm = () => {
  const [userRedirect, setUserRedirect] = useState(false)

  const { setBiblioteca } = useContext(BibliotecaContext)

  const setaCookie = async (value) => {
    setBiblioteca({
      "id":value.id,
      "name":value.name,
    })
    localStorage.setItem("biblioteca", JSON.stringify(value))
  }

  const enviarFormulario = async (event) => {
    event.preventDefault();

    const dados = {
      email: event.target.email.value,
      password: event.target.senha.value,
    }

    try {
      const login = await api.post('/library/login', dados)
      
      if(login.status === 200){
        setaCookie(login.data.data)
        setUserRedirect(!userRedirect)
      }
    } catch(e){
      console.log(e)
      alert("Email ou senha errados")
    }
  }

  if(userRedirect){
    return (<Navigate replace to='/'/>) 
  } else {
    return (
      <div className="formulario">
        <div className="centralizar">
          <center>
            <h2>Login</h2>
            <br/>
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
    )
  }
}

export default LoginForm;
