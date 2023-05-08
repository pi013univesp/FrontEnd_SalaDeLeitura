import React, { useState, useEffect } from "react";
import { useParams, Navigate } from 'react-router-dom';
import "../App.css";
import api from "../service/api";

const EditordeLivros = () => {
    const [userRedirect, setUserRedirect] = useState(false)

    const [livro, setLivro] = useState({})
    const [livroNaEscola, setLivroNaEscola] = useState({})

    const { id } = useParams();

    async function buscaLivro(idprop){
        const url = await api.get(`/book-at-library/${idprop}`)
        setLivroNaEscola(url.data.data)

        const url2 = await api.get(`/book/${url.data.data.book_fk}`)
        setLivro(url2.data.data)
    }

    useEffect(() => {
        buscaLivro(id)
    }, [id])

    const [form, setForm] = useState({
		tema: '',
		data: '',
		tombo: '',
		procedencia: '',
		titulolivro: '',
		autor: '',
		editora: '',
		estoque: '',
	});


    useEffect(() => {
        setForm({
            tema: livro.especie,
            data: livro.data,
            tombo: livro.tombo,
            procedencia: livro.procedencia,
            titulolivro: livro.title,
            autor: livro.author,
            editora: livro.publisher,
            estoque: livroNaEscola.book_stock,
	    });
    }, [livroNaEscola,livro])


    const alteracao = (evento) => {
		setForm({
			...form,
			[evento.target.id]: evento.target.value,
		});
	};


    async function enviarFormulario(event) {
        event.preventDefault();
        const dadosLivro = {
            title: form.titulolivro,
            author: form.autor,
            publisher: form.editora,
            especie: form.tema,
            data: form.data,
            tombo: form.tombo,
            procedencia: form.procedencia,
        };
        try {
            const envio1 = await api.put(`/book/update/${livro.id}`, dadosLivro);
            if(envio1.status === 200){
                const dadosLivroNaBiblioteca = {
                    book_stock: form.estoque,
                }
                const envio2 = await api.put(`/book-at-library/update/${livroNaEscola.id}`, dadosLivroNaBiblioteca);
                if(envio2.status === 200){
                    alert('Livro Editado!');
                    setUserRedirect(!userRedirect)
                }
            }
        } catch (e) {
            console.log(e)
        }
    }
    if(userRedirect){
        return (<Navigate replace to='/'/>) 
      } else {
    return (
        <div className="CadastroLivros">

            <h2 className="NovoRegistro">Editar Livro</h2>
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
                                onChange={alteracao}
                                defaultValue={form.tema} 
                            />
                            <span>Procedência</span>
                            <input 
                                type="text" 
                                placeholder="Procedência" 
                                id="procedencia" 
                                required 
                                onChange={alteracao} 
                                defaultValue={form.procedencia}
                            />
                            <span>Título</span>
                            <input 
                                type="text" 
                                placeholder="Título" 
                                id="titulolivro" 
                                required 
                                onChange={alteracao} 
                                defaultValue={form.titulolivro} 
                            />
                        </td>
                        <td className="CadLivrosLateraldir">
                            <span>Autor</span>
                            <input 
                                type="text" 
                                placeholder="Autor" 
                                id="autor" required 
                                onChange={alteracao} 
                                defaultValue={form.autor}
                            />
                            <span>Editora</span>
                            <input 
                                type="text" 
                                placeholder="Editora" 
                                id="editora" 
                                required 
                                onChange={alteracao} 
                                defaultValue={form.editora}
                            />
                            <span>Estoque</span>
                            <input 
                                label="Estoque" 
                                type="number" 
                                placeholder="estoque" 
                                id="estoque" 
                                required onChange={alteracao} 
                                defaultValue={form.estoque} 
                            />
                        </td>
                    </tr>
                </table>
                <center>
                    <button className="botao2" type="submit">
                        Editar
                    </button>
                </center>
            </form>

        </div>
    );
}}

export default EditordeLivros;
