/* eslint-disable */
import React, { useState, useEffect } from "react";
import api from "../../../service/api";
import "../../../App.css";

export const TabelaEmprestimos = () => {

    const [alugueis, setAlugueis] = useState([])
    const [reload, setReload] = useState(false)
    const biblioteca = JSON.parse(localStorage.getItem('biblioteca')).id


    async function buscaAluguel(){
        const url = await api.get('/borrow/')
        setAlugueis(url.data.data)
    }

    useEffect(() => {
        buscaAluguel()
    }, [reload])

    const finalizaEmprestimo = (id) => {
        const c = confirm("Tem certeza de que quer finalizar esse emprestimo?")
        if(c){
            api.get(`/borrow/close/${id}`)
            setReload(!reload)
        }else{
            alert("operação cancelada")
        }
    }


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
        <div className="DadosEmprestimos">
            <table className="ListaEmprestimos">
                <tr >
                    <td><h3>Data do aluguel</h3></td>
                    <td><h3>Data final</h3></td>
                    <td><h3>Devolvido</h3></td>
                    <td><h3>Titulo</h3></td>
                    <td><h3>Cliente</h3></td>
                    <td><h3>Finalizar emprestimo</h3></td>
                </tr>
                {
                    alugueis.length > 0 && alugueis.map((item) => {
                        if(item.library_fk === biblioteca) { 
                            return (
                                <tr key={item.id}>
                                    <td>{dataFormatada(item.borrow_date)}</td>
                                    <td>{dataFormatada(item.end_date)}</td>
                                    <td>{item.return_date ? dataFormatada(item.return_date) : "Ainda não devolvido"}</td>
                                    <td>{item.book_title}</td>
                                    <td>{item.client_name}</td>
                                    <td>{
                                        !item.return_date ?  (<button  onClick={() => finalizaEmprestimo(item.id)}>Finalizar</button>) : "Finalizado"
                                    }</td>
                                    
                                </tr>
                            )
                        }
                    })
                }
            </table>

        </div>
    );
}
