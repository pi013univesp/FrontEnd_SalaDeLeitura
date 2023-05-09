import React, { useState, useEffect } from "react";
import "../App.css";
import api from "../service/api";


const PesquisarLivrosComp = () => {

    const [livros, setLivros] = useState([])

    async function buscaLivros(){
        const url = await api.get('/book/')
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
                    </tr>
                    {
                        livros.length > 0 && livros.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.author}</td>
                                    <td>{item.publisher}</td>
                                    <td>{item.especie}</td>
                                    <td>{dataFormatada(item.data)}</td>
                                    <td>{dataFormatada(item.tombo)}</td>
                                    <td>{item.procedencia}</td>
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