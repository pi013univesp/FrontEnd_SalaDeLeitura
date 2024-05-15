import React from "react";
import '../App.css';

const LivrosMaisLidos = ({setSelecao}) => {

    const livros = [
        "O Menino Maluquinho",
        "O Pequeno Príncipe",
        "A Bolsa Amarela",
        "O Trem das Cores",
        "O Aniversário da Tia Júlia",
        "O Problema dos Três Burrinhos",
        "O Tesouro dos Problemas",
        "O Livro dos Números",
        "A Matemática do Dia a Dia",
        "Quem Tem Medo de Matemática?"
    ]


    return (
        <div className='LivrosCadastrados'>
            <div className='CabecarioLivros'>
                <h2>Livros Mais alugados</h2>
            </div>
            <div className='ListaLivros'>
                <table >
                    <tr>
                        {
                            livros.length > 0 && livros.map(( item, index ) => {
                                return ( <p style={{marginBottom: "7px", marginTop: "7px", cursor: "pointer"}} onClick={() => setSelecao(index)}>{index + 1} - {item}</p>)
                            })
                        }
                    </tr>
                </table>
            </div>
        </div>

    );
}

export default LivrosMaisLidos;