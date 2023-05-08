import React, { useState, useEffect } from "react";
import api from "../service/api";
import "../App.css";


const ListaEmprestimos = () => {

    const [alugueis, setAlugueis] = useState([])

    async function buscaAluguel(){
        const url = await api.get('/borrow/')
        setAlugueis(url.data.data)
    }

    useEffect(() => {
        buscaAluguel()
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
        <div className="DadosEmprestimos">
            <div className="CabecarioEmprestimos">
                <h2>Empréstimos</h2>
            </div>
            <br/>
            <br/>
            <div>
                <table className="ListaEmprestimos">
                    <tr >
                        <td><h3>Data do aluguel</h3></td>
                        <td><h3>Data final</h3></td>
                        <td><h3>Devolvido</h3></td>
                        <td><h3>Titulo</h3></td>
                        <td><h3>Cliente</h3></td>
                    </tr>
                    {
                        alugueis.length > 0 && alugueis.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{dataFormatada(item.borrow_date)}</td>
                                    <td>{dataFormatada(item.end_date)}</td>
                                    <td>{item.return_date ? dataFormatada(item.return_date) : "Ainda não devolvido"}</td>
                                    <td>{item.book_title}</td>
                                    <td>{item.client_name}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    );
}

export default ListaEmprestimos;
