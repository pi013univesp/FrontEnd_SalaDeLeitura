import React, { useState } from "react";
import "../App.css";
import api from "../service/api";

const EditarLivros = () => {

    async function enviarFormulario(event) {
        console.log("exemplo")
        event.preventDefault();
        const dados = {
            titulo: event.target.titulo.value,
            tema: event.target.tema.value,
            editora: event.target.editora.value,
            autor: event.target.autor.value,
            estoque: event.target.estoque.value,
            resumo: event.target.resumo.value,
        };
        try {
            await api.post('/library/#', dados);

            alert('Livro Cadastrado!');
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="CadastroLivros">
            <div className="centralizar">
                <center>
                    <h2>Editar</h2>
                    <form onSubmit={enviarFormulario} >
                        <input type="text" placeholder="Título" id="titulolivro" required />
                        <input type="text" placeholder="Tema/Genero" id="Tema" required />
                        <input type="text" placeholder="Editora" id="editora" required />
                        <input type="text" placeholder="Autor" id="autor" required />
                        <input type="number" placeholder="estoque" id="estoque" required />
                        <input type="text" placeholder="Resumo" id="resumo" required />

                        <button className="botao1" type="submit">
                            salvar
                        </button>
                        <button className="botao1" type="submit">
                            Exluir
                        </button>
                    </form>
                </center>
            </div>
        </div>
    );
}

export default EditarLivros;
