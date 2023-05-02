import React, { useState } from "react";
import "../App.css";
import api from "../service/api";

const CadastrodeLivros = () => {

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
                            <input type="text" placeholder="Tema/Genero" id="Tema" required />
                            <input type="text" placeholder="Data" id="data" required />
                            <input type="number" placeholder="Tombo" id="tombo" required />
                            <input type="text" placeholder="Procedência" id="procedencia" required />
                            <input type="text" placeholder="Título/Especie" id="titulolivro" required />
                            <input type="text" placeholder="Autor" id="autor" required />
                            <input type="text" placeholder="Editora" id="editora" required />
                        </td>

                        <td className="CadLivrosLateraldir">
                            <tr>

                                <h3>Estoque:</h3>
                                <input label="Estoque" type="number" placeholder="estoque" id="estoque" required />

                                <div className="resumo" >
                                    <textarea type="text" placeholder="Resumo" id="resumo" required />
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

export default CadastrodeLivros;
