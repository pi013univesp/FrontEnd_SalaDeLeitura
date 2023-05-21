import React, { useState } from "react";
import "../../App.css";
import api from "../../service/api";
import { UsuariosCadastrados } from "../../Components/UsuariosCadastrados";

const CadastroCliente = () => {

    const [update, setUpdate] = useState(false)
    async function enviarFormulario(event) {
        event.preventDefault();
        const dadosCliente = {
            name: event.target.name.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
            library_fk: JSON.parse(localStorage.getItem('biblioteca')).id
        };
        try {
            const envio1 = await api.post('/client/register/', dadosCliente);
            if (envio1.status === 201) {
                alert('Cliente Cadastrado!');
                setUpdate(!update)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <UsuariosCadastrados update={update} />
            <div className="CadastroLivros">
                <center>
                    <h2 className="NovoRegistro">Novo Cliente</h2>
                    <br />
                    <form onSubmit={enviarFormulario} >
                        <table className="CadLivros">
                            <tr>
                                <td className="CadLivrosLateralesq">
                                    <span>Nome:</span>
                                    <input
                                        type="text"
                                        placeholder="Nome"
                                        id="name"
                                        required
                                    />
                                    <span>Telefone:</span>
                                    <input
                                        type="text"
                                        placeholder="Telefone"
                                        id="phone"
                                        required
                                    />
                                    <span>Endereço:</span>
                                    <input
                                        type="text"
                                        placeholder="Endereço"
                                        id="address"
                                        required
                                    />
                                </td>
                            </tr>
                        </table>
                        <br />
                        <button className="botao2" type="submit">
                            Cadastrar
                        </button>

                    </form>
                </center>
            </div>
        </>
    );
}

export default CadastroCliente;
