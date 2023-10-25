import React from "react";
import "../App.css";

const QuemSomosComp = () => {

    return (
        <div className="formulario">
            <div className="centralizar">
                <center>
                    <h2>Quem Somos</h2>
                    <p>
                        Estudantes de graduação do curso do Eixo computação da Univesp. <br />
                        Esse site é resultado da diciplina do Projeto Integrador II - 2023 <br />
                        Sob orientação do Profº. e orientador: Ana Lúcia Barauna Lima.
                    </p>

                    <p>
                        Integrantes: <br />
                        Anderson da Silva Procopio Bernardo <br />
                        Julia Quevedo Matsucura <br />
                        Lais Pereira de Paula <br />
                        Lucas Damasceno Viana Alves <br />
                        Marcos Paulo Dias Silva <br />
                        Mario Matsucura <br />
                        Michel Lourenco Fernandes <br />
                        Victor Hugo Lino da Silva <br />
                    </p>
                       <img src="https://upload.wikimedia.org/wikipedia/pt/6/6f/Logo_univesp.png" alt="Logo Univesp" className="LogoUnivesp" />                    
                </center>
            </div>
        </div>
    );
}

export default QuemSomosComp;