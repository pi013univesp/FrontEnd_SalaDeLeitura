import React, { useState } from "react";
import "../../App.css";
import { TabelaEmprestimos } from "./TabelaEmprestimos";
import { CadastroEmprestimo } from "./CadastroEmprestimo";

const ListaEmprestimos = () => {

    const [componente, setComponente] = useState(0)

    return (
        <div className="DadosEmprestimos">
            <div className="CabecarioEmprestimos">
                <p 
                    style={{textDecoration: componente === 0 && 'underline'}}
                    onClick={() => setComponente(0)}
                >
                    Empréstimos
                </p>
                <p 
                    style={{textDecoration: componente === 1 && 'underline'}}
                    onClick={() => setComponente(1)}
                >
                    Novo empréstimo
                </p>
            </div>
            <br/>
            { 
                componente === 0 ? 
                    <TabelaEmprestimos/>
                    :
                    <CadastroEmprestimo setComponente={setComponente}/>
            }
        </div>
    );
}

export default ListaEmprestimos;
