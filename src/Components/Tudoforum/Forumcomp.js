
import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

import { obterCorPelaLetra, removerPrimeiraLetra } from "./utils";
import api from "../../service/api";

import "./forum.css";

function Forumcomp() {
    const [comentarios, setComentarios] = useState([])
    const { id } = useParams();

    async function buscaComentarios(){
        const url = await api.get(`/comment/${id}`)
        setComentarios(url.data.data)
    }

    useEffect(() => {
        buscaComentarios()
    }, [])

    const ComentariosVariados = ({nome, letra, text, cor}) => {
        return (
            <div className="secaocomentario">
                <div className="Perfil" style={{backgroundColor:cor}}>{letra}</div>
                <div className="comentariosescritos">
                    <h3>{nome} </h3>
                    <br />
                    <p>{text}</p>
                </div>
            </div>
        )
    }

    async function enviarComentario(event) {
        event.preventDefault();
        const dadosComent = {
            name: event.target.nome.value,
            commentText: event.target.coment.value,
            forum: id,
        };

        try {
            const enviaComment = await api.post('/comment/register/', dadosComent)
      
            if(enviaComment.status === 201){
                alert('Comentário cadastrado!');
                buscaComentarios()
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div className="Escrevercomentario">
                <form onSubmit={enviarComentario}>
                    <h2>Fórum {id}</h2>
                    <br />
                    <p>Nome de usuário:</p>
                    <input 
                        className="AreatextoNome"
                        id="nome"
                        type="text"
                        name="nome"
                    />
                    <p>escreva aqui uma mensagem:</p>
                    <textarea 
                        className="Areatexto"
                        id="coment"
                        name="coment"
                    />
                    <br />
                    <br />
                    <button type="submit"> Enviar</button>

                </form>

                {
                    comentarios && comentarios.map(element => {
                        const letra = removerPrimeiraLetra(element.name)
                        const cor = obterCorPelaLetra(letra)
                        return (
                            <ComentariosVariados 
                                key={element.id}
                                nome={element.name}
                                letra={letra.toUpperCase()} 
                                text={element.commentText}
                                cor={cor}
                            />
                        )
                    })
                }
            </div>
        </>
    );
}

export default Forumcomp;
