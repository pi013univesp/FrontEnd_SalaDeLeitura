import React from "react";
import "../App.css";
import api from "../service/api";

const CadastrodeLivros = () => {

    async function enviarFormulario(event) {
        event.preventDefault();
        const dadosLivro = {
            title: event.target.titulolivro.value,
            author: event.target.autor.value,
            publisher: event.target.editora.value,
            especie: event.target.tema.value,
            data: event.target.data.value,
            tombo: event.target.tombo.value,
            procedencia: event.target.procedencia.value,
        };
        try {
            const envio1 = await api.post('/book/register/', dadosLivro);
            if(envio1.status === 201){
                const { data } = envio1
                const storage = JSON.parse(localStorage.getItem('biblioteca'))
                const dadosLivroNaBiblioteca = {
                    library_fk: storage.id,
                    book_fk: data.data.id,
                    book_stock: event.target.estoque.value,
                }
                const envio2 = await api.post('/book-at-library/register/', dadosLivroNaBiblioteca);
                if(envio2.status === 201){
                    alert('Livro Cadastrado!');
                }
            }
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
                            <span>Tema</span>
                            <input 
                                type="text" 
                                placeholder="Tema/Genero" 
                                id="tema" 
                                required 
                            />
                            <span>Data</span>
                            <input 
                                type="date" 
                                placeholder="Data" 
                                id="data" 
                                required 
                            />
                            <span>Tombo</span>
                            <input 
                                type="date" 
                                placeholder="Tombo" 
                                id="tombo" 
                                required 
                            />
                            <span>Procedência</span>
                            <input
                                type="text" 
                                placeholder="Procedência" 
                                id="procedencia" 
                                required 
                            />
                        </td>
                        <td className="CadLivrosLateraldir">
                            <span>Título</span>
                            <input 
                                type="text" 
                                placeholder="Título/Especie" 
                                id="titulolivro" 
                                required 
                            />
                            <span>Autor</span>
                            <input type="text" 
                                placeholder="Autor" 
                                id="autor" 
                                required 
                            />
                            <span>Editora</span>
                            <input type="text" 
                                placeholder="Editora" 
                                id="editora" 
                                required 
                            />
                            <span>Estoque</span>
                            <input 
                                label="Estoque" 
                                type="number" 
                                placeholder="estoque" 
                                id="estoque" 
                                required 
                            />
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
