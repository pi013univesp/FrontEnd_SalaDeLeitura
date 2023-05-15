import React, {useEffect, useState} from "react";
import api from "../../../service/api";
import './style.css'

export const CadastroEmprestimo = ({
    setComponente
}) => {
    const [livros, setLivros] = useState([])
    const [clientes, setClientes] = useState([])
    const biblioteca = JSON.parse(localStorage.getItem('biblioteca')).id

    async function enviarFormulario(event) {
        event.preventDefault();
        const dadosEmprestimo = {
            book_fk: parseInt(event.target.book.value),
            client_fk: parseInt(event.target.client.value),
            library_fk: biblioteca,
            end_date: event.target.end_date.value,
        };

        try {
            const envio1 = await api.post('/borrow/register/', dadosEmprestimo);
            if(envio1.data.message === 'Esse cliente tem pendencia de livro'){
                alert(envio1.data.message);
            }
            if(envio1.status === 201){
                alert('Emprestimo cadastrado');
                setComponente(0)
            }
        } catch (e) {
            console.log(e)
        }
    }


    const getDados = async () => {
        const url = await api.get('/book-at-library/')
        const urlCliente = await api.get('/client')
        setLivros(url.data.data)
        setClientes(urlCliente.data.data)
    }

    useEffect(() => {
        getDados()
    }, [])

    return (
        <form onSubmit={enviarFormulario} className="formCadastroEmprestimo" >
            <div className="formContainer">
                <label>Cliente <br/>
                    <select id="client" className="selectCadastroEmprestimo">
                        {
                            clientes.length > 0 && clientes.map((item) => {
                                return(
                                    item.library_fk === biblioteca &&  <option value={item.id} key={item.id}>{item.name}</option>
                                )
                            })
                        }
                    </select>
                </label>
                
                <label>Livro  <br/>
                    <select id="book" className="selectCadastroEmprestimo">
                        {
                            livros.length > 0 && livros.map((item) => {
                                return(
                                    item.library_fk === biblioteca && <option value={item.book_id} key={item.id}>{item.book_title}</option>
                                )
                            })
                        }
                    </select>
                </label>
                <label>Data devolução  <br/>
                    <input 
                        type="date"
                        id="end_date" 
                        required 
                        className="selectCadastroEmprestimo"
                    />
                </label>
            </div>
            <center>
                <br/>
                <button className="botao2" type="submit">
                    Cadastrar
                </button>
            </center>
        </form>
    );
}

