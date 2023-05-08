import React from "react";
import "../App.css";
import CadastrodeLivros from "../Components/CadastrodeLivros";
import LivrosCadastrados from "../Components/LivrosCadastrados";

const CadastroLivros = () => {

    return (
        <>
            <LivrosCadastrados />
            <CadastrodeLivros />
        </>
    );
}

export default CadastroLivros;
