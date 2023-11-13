import "../App.css";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Menu from './Menu'

import BibliotecaContext from "../contexts/BibliotecaContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { biblioteca, setBiblioteca } = useContext(BibliotecaContext)

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const deslogar = () => {
    try{
      setBiblioteca({})
      localStorage.removeItem('biblioteca')
    } catch(e){
      console.log(e)
    }
  }

  return (
    <>
      <div className="header-container">
        <div className="logo">
          <h1>
            <Link to="/" className="logoLink">
              Sala de Leitura para todos
            </Link>
          </h1>
        </div>
        <button className="menu-button" onClick={handleMenuClick}>
          <span className="menu-icon">&#9776;</span>
        </button>
        <nav className={`nav-items ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/quem-somos" >
                Quem Somos
              </Link>
            </li>
            <li>
              <Link to="/cadastro" >
                Cadastro
              </Link>
            </li>
            
            { !biblioteca.name ?
              <li>
                <Link to="/login" >
                  Login
                </Link>
              </li> 
              :
              <li>
                <Link onClick={deslogar} to="/">Sair</Link>
              </li> 
            }
          </ul>
        </nav>
      </div>
      
      {
        biblioteca.name && <Menu />
      }
    </>
  );
}

export default Header;
