import React from "react";
import Header from "./Components/Header";
import Rotas from "./Rotas.js";
import Footer from "./Components/Footer"
import './App.css';

export default function App() {

  return (
    <div className="App">
      <Header />
      <Rotas />
      <Footer />
    </div>
  );
}