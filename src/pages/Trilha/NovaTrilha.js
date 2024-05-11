import React from "react";
import api from "../../service/api";
import '../../Components/ListaEmprestimos/CadastroEmprestimo/style.css'

export const NovaTrilha = ({
    setComponente
}) => {

    async function enviarFormulario(event) {
        event.preventDefault();
        const dadosTrilha = {
            name: event.target.trilha_name.value,
        };

        try {
            const envio1 = await api.post('/trilha/register/', dadosTrilha);
            if(envio1.data.message === 'Trilha cadastrada'){
                alert(envio1.data.message);
            }
            if(envio1.status === 201){
                alert('Trilha cadastrada');
                setComponente(0)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <form onSubmit={enviarFormulario} className="formCadastroEmprestimo" >
            <div className="formContainer">
                
                <label>Nome da trilha  <br/>
                    <input 
                    type="text"
                    placeholder="nome"
                    id="trilha_name"
                    required
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

