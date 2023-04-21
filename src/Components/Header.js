import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-container">
      <div className="logo">
        <h1>
          <Link to="/" className="logoLink">
            Sala de Leitura
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
          <li>
            <Link to="/login" >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
