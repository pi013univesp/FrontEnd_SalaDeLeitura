import React, {useEffect, useState} from "react";
import api from "../../service/api";
import '../../Components/ListaEmprestimos/CadastroEmprestimo/style.css'

export const AdicionarLivroNaTrilha = () => {
    const [livros, setLivros] = useState([])
    const [trilhas, setTrilhas] = useState([])
    const biblioteca = JSON.parse(localStorage.getItem('biblioteca')).id

    async function enviarFormulario(event) {
        event.preventDefault();
        const dadosLivroTrilha = {
            book_fk: parseInt(event.target.book.value),
            library_fk: biblioteca,
            trilha_fk: event.target.trilha.value,
            posicao_na_trilha: parseInt(event.target.posicao.value),
        };

        try {
            const envio1 = await api.post('trilha/livro/', dadosLivroTrilha);
            if(envio1.status === 201){
                alert('Livro adicionado na trilha');
            }
        } catch (e) {
            console.log(e)
        }
    }


    const getDados = async () => {
        const url1 = await api.get('/trilha/')
        const url2 = await api.get('/book-at-library/')
        setLivros(url2.data.data)
        setTrilhas(url1.data.data)
    }

    useEffect(() => {
        getDados()
    }, [])

    return (
        <form onSubmit={enviarFormulario} className="formCadastroEmprestimo" >
            <div className="formContainer">
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
                <label>Trilha  <br/>
                <select id="trilha" className="selectCadastroEmprestimo">
                        {
                            trilhas.length > 0 && trilhas.map((item) => {
                                return(
                                    <option value={item.id} key={item.id}>{item.name}</option>
                                )
                            })
                        }
                    </select>
                </label>
                <label>posição na trilha <br/>
                        <input id="posicao" className="selectCadastroEmprestimo"/>
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

