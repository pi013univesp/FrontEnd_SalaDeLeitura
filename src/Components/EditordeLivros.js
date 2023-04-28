import React, { useState } from "react";
import "../App.css";
import api from "../service/api";

const EditordeLivros = () => {

    async function enviarFormulario(event) {
        console.log("exemplo")
        event.preventDefault();
        const dados = {

            tema: event.target.tema.value,
            data: event.target.data.value,
            tombo: event.target.tombo.value,
            procedencia: event.target.procedencia.value,
            titulo: event.target.titulo.value,
            autor: event.target.autor.value,
            editora: event.target.editora.value,
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

            <h2 className="NovoRegistro">Novo Registro</h2>
            <form onSubmit={enviarFormulario} >
                <table className="CadLivros">
                    <tr>
                        <td className="CadLivrosLateralesq">
                            <input type="text" placeholder="Tema/Genero-Exemplo para edição" id="Tema" required />
                            <input type="text" placeholder="Data-Exemplo para edição" id="data" required />
                            <input type="number" placeholder="Tombo-Exemplo para edição" id="tombo" required />
                            <input type="text" placeholder="Procedência-Exemplo para edição" id="procedencia" required />
                            <input type="text" placeholder="Título/Especie-Exemplo para edição" id="titulolivro" required />
                            <input type="text" placeholder="Autor-Exemplo para edição" id="autor" required />
                            <input type="text" placeholder="Editora-Exemplo para edição" id="editora" required />
                        </td>

                        <td className="CadLivrosLateraldir">
                            <tr>

                                <h3>Estoque:</h3>
                                <input label="Estoque" type="number" placeholder="estoque-Exemplo para edição" id="estoque" required />

                                <div className="resumo" >
                                    <textarea type="text" placeholder="Resumo-Exemplo para edição" id="resumo" required />
                                </div>
                                <br/>
                            </tr>
                        </td>
                    </tr>
                </table>
                <center>
                    <button className="botao2" type="submit">
                        Cadastrar
                    </button>
                </center>
            </form>

        </div>
    );
}

export default EditordeLivros;
