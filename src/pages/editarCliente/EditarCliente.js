import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import "../../App.css";
import api from "../../service/api";
import { UsuariosCadastrados } from "../../Components/UsuariosCadastrados";

export const EditarCliente = () => {

    const [cliente, setcliente] = useState({})
    const [update, setUpdate] = useState(false)

    const { id } = useParams();

    async function buscaCliente(idprop){
        const url = await api.get(`/client/${idprop}`)
        setcliente(url.data.data)
    }

    useEffect(() => {
        buscaCliente(id)
    }, [id])

    const [form, setForm] = useState({
		name: '',
        phone: '',
        address: '',
	});


    useEffect(() => {
        setForm({
            name: cliente.name,
            phone: cliente.phone,
            address: cliente.address,
	    });
    }, [cliente])


    const alteracao = (evento) => {
		setForm({
			...form,
			[evento.target.id]: evento.target.value,
		});
	};

    async function enviarFormulario(event) {
        event.preventDefault();
        const dadosCliente = {
            name: form.name,
            phone: form.phone,
            address: form.address,
        };
        try {
            const envio1 = await api.put(`/client/update/${id}`, dadosCliente);
            if(envio1.status === 200){
                alert('Cliente editado!');
                setUpdate(!update)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
        <UsuariosCadastrados update={update}/>
        <div className="CadastroLivros">
            <h2 className="NovoRegistro">Editar Cliente</h2>
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
                                defaultValue={form.name}
                                onChange={alteracao}
                            />
                            <span>Telefone</span>
                            <input 
                                type="text" 
                                placeholder="Telefone" 
                                id="phone" 
                                required 
                                defaultValue={form.phone}
                                onChange={alteracao}
                            />
                            <span>Endereço</span>
                            <input 
                                type="text" 
                                placeholder="Endereço" 
                                id="address" 
                                required 
                                defaultValue={form.address}
                                onChange={alteracao}
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
        </>
    );
}
