import React, {useState} from "react";
import "../App.css";
import LivrosMaisLidos from "./LivrosMaisLidos";
import LivrosRecomendados from "./LivrosRecomendados";

const MaisAlugados = () => {

    const [selecao, setSelecao] = useState(0)

    return (
        <>
            <LivrosMaisLidos setSelecao={setSelecao} />
            <LivrosRecomendados selecionado={selecao} />
        </>
    );
}

export default MaisAlugados;
