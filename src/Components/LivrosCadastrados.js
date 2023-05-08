import React, { useState, useEffect } from "react";
import api from "../service/api";
import '../App.css';
import { Link } from "react-router-dom";

const LivrosCadastrados = () => {

    const [livros, setLivros] = useState([])

    async function buscaLivros(){
        const url = await api.get('/book-at-library/')
        setLivros(url.data.data)
    }

    useEffect(() => {
        buscaLivros()
    }, [])


    return (
        <div className='LivrosCadastrados'>
            <div className='CabecarioLivros'>
                <h2>Livros Cadastrados</h2>
            </div>
            <div className='ListaLivros'>
                <table >
                    <tr>
                        {
                            livros.length > 0 && livros.map((item) => {
                                return (
                                    <Link to={{pathname:`/editar-livros/${item.id}`}} key={item.id}>
                                        <p>{item.book_title}</p>
                                    </Link>
                                )
                            })
                        }
                    </tr>
                </table>
            </div>
        </div>

    );
}

export default LivrosCadastrados;