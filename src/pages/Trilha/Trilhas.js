import React, { useState }  from "react";
import "../../App.css";
import { TabelaTrilhas } from "./TabelaTrilhas";
import { NovaTrilha } from "./NovaTrilha";
import { AdicionarLivroNaTrilha } from "./AdicionarLivroNaTrilha";

const Trilhas = () => {
    const [componente, setComponente] = useState(0)

    const renderComponent = () => {
        switch (componente) {
            case 0:
                return <TabelaTrilhas />;
            case 1:
                return <NovaTrilha setComponente={setComponente}/>;
            case 2:
                return <AdicionarLivroNaTrilha />;
            default:
                return <TabelaTrilhas />;
        }
    }

    return (
        <div className="DadosEmprestimos">
            <div className="CabecarioEmprestimos">
                <p 
                    style={{textDecoration: componente === 0 && 'underline'}}
                    onClick={() => setComponente(0)}
                >
                    Trilhas
                </p>
                <p 
                    style={{textDecoration: componente === 1 && 'underline'}}
                    onClick={() => setComponente(1)}
                >
                    Nova Trilha
                </p>
                <p 
                    style={{textDecoration: componente === 1 && 'underline'}}
                    onClick={() => setComponente(2)}
                >
                    adicionar livro na trilha
                </p>
            </div>
        <br/>
        { renderComponent() }
    </div>
    )
}

export default Trilhas;