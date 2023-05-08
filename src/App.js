import React, { useState } from "react";
import Header from "./Components/Header";
import Rotas from "./Rotas.js";
import Footer from "./Components/Footer";

import './App.css';

import BibliotecaContext from "./contexts/BibliotecaContext";

export default function App() {
  const storage = JSON.parse(localStorage.getItem('biblioteca'))
  const [biblioteca, setBiblioteca] = useState(storage ? storage : {})

  return (
    <BibliotecaContext.Provider value={{biblioteca, setBiblioteca}}>
      <div className="App">
        <Header />
        <Rotas />
        <Footer />
      </div>
    </BibliotecaContext.Provider>
  );
}