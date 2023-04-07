import "../App.css";
import React, { useState } from "react";
import CadastroForm from "./Cadastro";
import LoginForm from "./Login";
import QuemSomos from "./QuemSomos";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCadastro, setOpenCadastro] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openQuemSomos, setOpenQuemSomos] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-container">
      <div className="logo">
        <h1>Sala de Leitura</h1>
      </div>
      <button className="menu-button" onClick={handleMenuClick}>
        <span className="menu-icon">&#9776;</span>
      </button>
      <nav className={`nav-items ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#" onClick={() => setOpenQuemSomos((prev) => !prev)}>
              Quem Somos</a>
          </li>
          <li>
            <a href="#" onClick={() => setOpenCadastro((prev) => !prev)}>
              Cadastro
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setOpenLogin((prev) => !prev)}>
              Login
            </a>
          </li>
        </ul>
      </nav>

      {openCadastro && <CadastroForm />}
      {openLogin && <LoginForm />}
      {openQuemSomos && <QuemSomos />}
    </div>
  );
}

export default Header;
