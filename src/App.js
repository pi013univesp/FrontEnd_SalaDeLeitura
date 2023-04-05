import React from "react";
import Routes from "./Rotas";
import { BrowserRouter } from 'react-router-dom';
import Header from "./Components/Header"

export default function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes />
      </div>
    </BrowserRouter>
  );
}
