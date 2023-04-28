import React from "react";
import "../App.css";
import api from "../service/api";


const PesquisarLivrosComp = () => {

    return (
       <div className="CadastroLivros">
        <h2 className="NovoRegistro">Pesquisar Livro:</h2>
        <br/>

        <input type="text" placeholder="Digite o nome do Livro" />
        


       </div>
    );
}

export default PesquisarLivrosComp;