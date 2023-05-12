import React from "react";
import "../../App.css";
import api from "../../service/api";

const CadastroCliente = () => {

    async function enviarFormulario(event) {
        event.preventDefault();
        const dadosCliente = {
            name: event.target.name.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
        };
        try {
            const envio1 = await api.post('/client/register/', dadosCliente);
            if(envio1.status === 201){
                alert('Cliente Cadastrado!');
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="CadastroLivros">
            <h2 className="NovoRegistro">Novo Cliente</h2>
            <br/>
            <form onSubmit={enviarFormulario} >
                <table className="CadLivros">
                    <tr>
                        <td className="CadLivrosLateralesq">
                            <span>Nome</span>
                            <input 
                                type="text" 
                                placeholder="Nome" 
                                id="name" 
                                required 
                            />
                            <span>Telefone</span>
                            <input 
                                type="text" 
                                placeholder="Telefone" 
                                id="phone" 
                                required 
                            />
                            <span>Endereço</span>
                            <input 
                                type="text" 
                                placeholder="Endereço" 
                                id="address" 
                                required 
                            />
                        </td>
                    </tr>
                </table>
                <center>
                    <button className="botao2" type="submit">
                        Cadastrar
                    </button>
                </center>
            </form>

        </div>
    );
}

export default CadastroCliente;
