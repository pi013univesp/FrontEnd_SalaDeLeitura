import React from "react";
import "../App.css";
import api from "../service/api";
import ListaEmprestimos from "../Components/ListaEmprestimos";
import LivrosCadastrados from "../Components/LivrosCadastrados";

const Emprestimos = () => {

    return (
        <>
            <LivrosCadastrados />
            <ListaEmprestimos />

        </>
    );
}

export default Emprestimos;