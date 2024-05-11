import React, { useState, useEffect }  from "react";
import { useParams } from 'react-router-dom';
import "../../App.css";
import api from "../../service/api";

const TrilhaEspecifica = () => {

    const [livros, setLivros] = useState([])

    const { id, name } = useParams();

    async function buscaLivros(id){
        const url = await api.get(`/trilha/${id}`)
        setLivros(url.data.data)
    }

    useEffect(() => {
        buscaLivros(id)
    }, [id])

    return (
        <div className="PesquisarLivros">
        <h2 className="NovoRegistro">Livros da trilha - {name}</h2>
        <br/>
        <p>Para que a trilha seja mais bem aproveitada, você deve seguir os livros propostos em ordem. </p>
        <br/>
            <div>
                <table className="Listatrilha">
                    <tr >
                        <td><h3>Posição</h3></td>
                        <td><h3>Título</h3></td>
                        <td><h3>Autor</h3></td>
                        <td><h3>Editora</h3></td>
                    </tr>
                    {
                        livros.length > 0 && livros.map((item) => {
                        
                            return (
                                <tr key={item.id}>
                                    <td><b>{item.posicao_na_trilha}</b></td>
                                    <td><b>{item.book_title}</b></td>
                                    <td>{item.book_author}</td>
                                    <td>{item.book_publisher}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
       </div>
    );
}

export default TrilhaEspecifica;