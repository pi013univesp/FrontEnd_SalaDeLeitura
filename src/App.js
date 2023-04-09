import React from "react";
import Header from "./Components/Header.js";
import Carrossel from "./Components/Carrossel.js";
import Carousel from 'react-elastic-carousel';
import Card_livro from "./Components/Card_livro.js";
import CadastroLivros from "./Components/CadastroLivros.js"
import EditarLivros from "./Components/EditarLivros.js";
import LivrosCadastrados from "./Components/LivrosCadastrados.js";
import Menu from "./Components/Menu.js";
import LivrosInfo from "./Components/LivrosInfo.js";
import './App.css';

export default function App() {

  return (
    <div className="App">
      <>
      <Header />
      <Card_livro />      
      </>
    </div>
  );
}
/* 
<Card_livro /> 
<CadastroLivros />
<EditarLivros /> 
<LivrosCadastrados /> 
<Menu /> 
*/