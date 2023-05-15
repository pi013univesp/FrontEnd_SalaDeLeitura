import React, { useState, useEffect } from "react";
import api from "../service/api";
import '../App.css';
import { Link } from "react-router-dom";

export const UsuariosCadastrados = ({
    update
}) => {

    const [usuarios, setUsuarios] = useState([])
    const biblioteca = JSON.parse(localStorage.getItem('biblioteca')).id


    async function buscaUsuarios(){
        const url = await api.get('/client/')
        setUsuarios(url.data.data)
    }

    useEffect(() => {
        buscaUsuarios()
    }, [update])


    return (

        <div className='LivrosCadastrados'>
            <div className='CabecarioLivros'>
                <h2>Usuarios Cadastrados</h2>
            </div>
            <div className='ListaLivros'>
                <table >
                    <tr>
                        {
                            usuarios.length > 0 && usuarios.map((item) => {
                                return (
                                    item.library_fk === biblioteca && <Link to={{pathname:`/editar-cliente/${item.id}`}} key={item.id}>
                                        <p>{item.name} - Tel: {item.phone}</p>
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