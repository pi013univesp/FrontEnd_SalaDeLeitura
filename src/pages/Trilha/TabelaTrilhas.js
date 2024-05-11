/* eslint-disable */
import React, { useState, useEffect } from "react";
import api from "../../service/api";
import "../../App.css";
import { Link } from "react-router-dom";

export const TabelaTrilhas = () => {

    const [trilhas, setTrilhas] = useState([])

    async function buscaTrilha(){
        const url = await api.get('/trilha/')
        setTrilhas(url.data.data)
    }

    useEffect(() => {
        buscaTrilha()
    }, [])

    console.log(trilhas)

    return (
        <div className="DadosTrilha">
            <table className="ListaTrilha">
                <thead>
                <tr >
                    <td><h3>Trilhas</h3></td>
                </tr>
                </thead>
               <tbody>
                {
                    trilhas.length > 0 && trilhas.map((item) => {

                            return (
                                <tr key={item.id} >
                                    <td >
                                        <Link to={`/trilha/${item.id}/${item.name}`} style={{ textDecoration: 'none', color: 'inherit' }} >{item.name}</Link>
                                    </td>
                                </tr>
                            )

                    })
                }
                </tbody>
            </table>

        </div>
    );
}
