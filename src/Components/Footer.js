import React from "react";
import Container from "./Container";

const Footer = () => {

    function getAnoAtual() {
        const dataAtual = new Date();
        return dataAtual.getFullYear();
      }

    return(
        <Container>
            <footer>
                <p>&copy;Sala de Leitura-Univesp {getAnoAtual()}</p>
            </footer>
        </Container>
    )
}

export default Footer