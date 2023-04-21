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
            foto: event.target.foto.value,
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

            <h2 className="NovoRegistro">Editar</h2>
            <form onSubmit={enviarFormulario} >
                <table className="CadLivros">
                    <tr>
                        <td className="CadLivrosLateralesq">
                            <input type="text" placeholder="Título" id="titulolivro" required />
                            <input type="text" placeholder="Tema/Genero" id="Tema" required />
                            <input type="text" placeholder="Autor" id="autor" required />
                            <input type="text" placeholder="Editora" id="editora" required />
                        </td>

                        <td className="CadLivrosLateraldir">
                            <tr>
                                <h3>Estoque:</h3>
                                <input label="Estoque" type="number" placeholder="estoque" id="estoque" required />
                            </tr>
                            <tr>
                                <h3>Capa:</h3>
                                <input type="text" placeholder="adicionar foto" id="foto" required />
                            </tr>
                            <br />
                            <br/>
                            <br/>
                            <br/>
                          
                        </td>
                    </tr>
                </table>
                <div className="resumo" >
                    <textarea type="text" placeholder="Resumo" id="resumo" required />
                </div>

                <center>
                    <div className="BotaoEditar">
                        <button className="botao1" type="submit">
                            Salvar
                        </button>
                        <button className="botao1" type="submit">
                            Excluir
                        </button>
                    </div>
                </center>
            </form>


        </div>
    );
}

export default EditarLivros;
