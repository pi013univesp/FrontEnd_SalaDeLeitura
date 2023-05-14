import React, { useState, useEffect } from "react";
import "../App.css";
import api from "../service/api";


const PesquisarLivrosComp = () => {

    const [livros, setLivros] = useState([])
    const biblioteca = JSON.parse(localStorage.getItem('biblioteca')).id


    async function buscaLivros(){
        const url = await api.get('/book-at-library/')
        setLivros(url.data.data)
    }

    useEffect(() => {
        buscaLivros()
    }, [])


    const dataFormatada = (datas) => {
        const data =  new Date(datas)

        var formatedDate = data.toLocaleDateString({
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });
        return formatedDate
    }


    return (
       <div className="CadastroLivros">
        <h2 className="NovoRegistro">Pesquisar Livro:</h2>
        <br/>

        {/* <input type="text" placeholder="Digite o nome do Livro" /> */}
        
        <div>
                <table className="ListaEmprestimos">
                    <tr >
                        <td><h3>Titulo</h3></td>
                        <td><h3>Autor</h3></td>
                        <td><h3>Editora</h3></td>
                        <td><h3>Especie</h3></td>
                        <td><h3>Data</h3></td>
                        <td><h3>Tombo</h3></td>
                        <td><h3>Procedencia</h3></td>
                        <td><h3>Estoque</h3></td>
                        <td><h3>Emprestados</h3></td>
                        <td><h3>Estoque disponivel</h3></td>
                    </tr>
                    {
                        livros.length > 0 && livros.map((item) => {
                            return (
                                item.library_fk === biblioteca && <tr key={item.id}>
                                    <td>{item.book_title}</td>
                                    <td>{item.book_author}</td>
                                    <td>{item.book_publisher}</td>
                                    <td>{item.book_especie}</td>
                                    <td>{dataFormatada(item.book_data)}</td>
                                    <td>{dataFormatada(item.book_tombo)}</td>
                                    <td>{item.book_procedencia}</td>
                                    <td>{item.book_stock}</td>
                                    <td>{item.number_of_borrowed_books}</td>
                                    <td>{ parseInt(item.book_stock) - parseInt(item.number_of_borrowed_books)}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>

       </div>
    );
}

export default PesquisarLivrosComp;