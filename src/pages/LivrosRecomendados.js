import React from "react";
import "../App.css";

const LivrosRecomendados = ({
    selecionado
}) => {

    const livros = [
        {
            "O Menino Maluquinho": [
                "Menina Maluquinha",
                "Flicts",
                "O Menino Quadrado",
                "O Bichinho da Maçã",
                "A Turma da Rua Quinze"
            ]
        },
        {
            "O Pequeno Príncipe": [
                "O Pequeno Príncipe Ilustrado",
                "O Pequeno Príncipe em Cordel",
                "O Pequeno Príncipe em Quadrinhos",
                "O Pequeno Príncipe em Braille"
            ]
        },
        {
            "A Bolsa Amarela": [
                "Seis Vezes Lucas",
                "O Picadeiro dos Sonhos",
                "O Mistério do Circo",
                "Quem Roubou Meu Queijo?",
                "Cazuza: Só as Mães São Felizes"
            ]
        },
        {
            "O Trem das Cores": [
                "As Cores da Vida",
                "O Mundo Colorido de Margarida",
                "A Paleta de Cores",
                "O Pincel Mágico",
                "O Reino das Cores"
            ]
        },
        {
            "O Aniversário da Tia Júlia": [
                "O Aniversário da Vovó",
                "O Aniversário da Tia Lili",
                "O Aniversário do Vovô",
                "A Festa Surpresa",
                "O Bolo de Chocolate"
            ]
        },
        {
            "O Problema dos Três Burrinhos": [
                "O Enigma dos Quatro Cavalos",
                "O Segredo dos Cinco Gatinhos",
                "O Mistério dos Seis Cãezinhos",
                "A Aventura dos Sete Coelhinhos",
                "O Desafio dos Oito Pássaros"
            ]
        },
        {
            "O Tesouro dos Problemas": [
                "O Mistério dos Tesouros Escondidos",
                "O Segredo dos Mapas Antigos",
                "A Busca pelo Tesouro Perdido",
                "A Jornada dos Tesouros Mágicos",
                "O Enigma das Chaves Misteriosas"
            ]
        },
        {
            "O Livro dos Números": [
                "Aventuras Matemáticas",
                "Desvendando os Números",
                "O Mundo dos Números",
                "O Reino dos Números",
                "A Magia dos Números"
            ]
        },
        {
            "A Matemática do Dia a Dia": [
                "Matemática Prática",
                "Desafios Matemáticos",
                "Explorando a Matemática",
                "O Lado Divertido da Matemática",
                "Matemática para Curiosos"
            ]
        },
        {
            "Quem Tem Medo de Matemática?": [
                "Matemática sem Medo",
                "Descomplicando a Matemática",
                "Matemática para Todos",
                "Aventuras na Matemática",
                "Desvendando os Mistérios da Matemática"
            ]
        }
    ]

    return (
       <div className="PesquisarLivros" style={{width: "800px"}}>
        <h2 className="NovoRegistro">Recomendação de livros para: {Object.keys(livros[selecionado])}</h2>
        <br/>
        
        <div style={{display:"flex" ,justifyContent:"center"}} >
                <table className="ListaEmprestimos" style={{width: "500px", marginTop: "7px"}}>
                    <tr >
                        <td><h3>Título</h3></td>
                    </tr>
                    {
                    
                    livros[selecionado][Object.keys(livros[selecionado])[0]].map((item, index) => {
                            return (
                                <tr key={index} style={{ marginTop: "67px"}}>
                                    <td >{item}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>

       </div>
    );
}

export default LivrosRecomendados;