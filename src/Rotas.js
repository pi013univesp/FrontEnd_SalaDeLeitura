import React from "react";
import { Routes, Route } from 'react-router-dom';
import Container from './Components/Container'

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import CadastroLivros from "./pages/CadastroLivros";
import EditarLivros from "./pages/EditarLivros";
import Login from "./pages/Login";
import QuemSomos from "./pages/QuemSomos";
import Emprestimos from "./pages/Emprestimos";

const Rotas = () => {
    return (
        <Routes>
            <Route element={<Home />}           path="/" exact />
            <Route element={<Container> <Cadastro /> </Container>}       path="/cadastro" />
            <Route element={<Container><CadastroLivros /></Container>} path="/cadastro-livros" />
            <Route element={<Container><EditarLivros /></Container>}   path="/editar-livros" />
            <Route element={<Container><Login /></Container>}          path="/login" />
            <Route element={<Container><QuemSomos /></Container>}      path="/quem-somos" />
            <Route element={<Container><Emprestimos /></Container>}      path="/emprestimos" />
        </Routes>
    )
}

export default Rotas;