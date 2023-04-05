import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import CadastroLivros from "./pages/CadastroLivros";
import EditarLivros from "./pages/EditarLivros";
import Login from "./pages/Login";
import QuemSomos from "./pages/QuemSomos";


const Rotas = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '28px'
            }}
        >
            <Routes>
                <Route element={<Home />}           path="/" exact />
                <Route element={<Cadastro />}       path="/cadastro" />
                <Route element={<CadastroLivros />} path="/cadastro-livros" />
                <Route element={<EditarLivros />}   path="/editar-livros" />
                <Route element={<Login />}          path="/login" />
                <Route element={<QuemSomos />}      path="/quem-somos" />
            </Routes>
        </div>
    )
}

export default Rotas;