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
import PesquisarLivros from "./pages/PesquisarLivros";
import CadastroCliente from "./pages/cadastroCliente/CadastroCliente";
import { EditarCliente } from "./pages/editarCliente/EditarCliente";
import Forum from "./pages/Forum";
import Cadaforum from "./pages/Cadaforum";
import Trilhas from "./pages/Trilha/Trilhas";
import TrilhaEspecifica from "./pages/Trilha/TrilhaEspecifica"
import TrilhasP from "./pages/Trilha/TrilhasP";
import MaisAlugados from "./pages/MaisAlugados";

const Rotas = () => {
    return (
        <Routes>
            <Route element={<Home />}           path="/" exact />
            <Route element={<Container> <Cadastro /> </Container>}       path="/cadastro" />
            <Route element={<Container><CadastroLivros /></Container>} path="/cadastro-livros" />
            <Route element={<Container><EditarLivros /></Container>}   path="/editar-livros/:id" />
            <Route element={<Container><Login /></Container>}          path="/login" />
            <Route element={<Container><QuemSomos /></Container>}      path="/quem-somos" />
            <Route element={<Container><Emprestimos /></Container>}      path="/emprestimos" />
            <Route element={<Container><PesquisarLivros /></Container>}      path="/pesquisar-livros" />
            <Route element={<Container><CadastroCliente /></Container>}      path="/cadastro-cliente" />
            <Route element={<Container><EditarCliente /></Container>}   path="/editar-cliente/:id" />
            <Route element={<Container><Forum /></Container>}      path="/forum" />
            <Route element={<Container><Cadaforum /></Container>}      path="/Cada-forum/:id" />
            <Route element={<Container><Trilhas /></Container>}      path="/trilhas" />
            <Route element={<Container><TrilhaEspecifica /></Container>}      path="/trilha/:id/:name" />
            <Route element={<Container><TrilhasP /></Container>}      path="/trilhasp" />
            <Route element={<Container><MaisAlugados /></Container>}      path="/mais-alugados" />
        </Routes>
    )
}

export default Rotas;
