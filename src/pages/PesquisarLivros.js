import React from "react";
import "../App.css";
import PesquisarLivrosComp from "../Components/PesquisarLirvrosComp";
import LivrosCadastrados from "../Components/LivrosCadastrados";
import api from "../service/api";


const PesquisarLivros = () => {

    return (
        <>
            <LivrosCadastrados />
            <PesquisarLivrosComp />
        </>
    );
}

export default PesquisarLivros;