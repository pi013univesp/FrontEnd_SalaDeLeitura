import React from "react";
import Header from "./Components/Header.js";
import CadastroLivros from "./Components/CadastroLivros.js";
import Carrossel from "./Components/Carrossel.js";
import Carousel from 'react-elastic-carousel';
import Card_livro from "./Components/Card_livro.js";
import './App.css';

export default function App() {

  return (
    <div className="App">
      <Header />
      <Card_livro />
    </div>
  );
}
