import React from 'react';
import '../App.css';

const LivrosInfo = () => {
    return (
        <div className="Livros">      
            <table>
                <tr>
                    <td className="LivrosLateralesq">
                    <h3>Nome do livro: Harry Potter e a Pedra Filosofal </h3>
                    <p>Tema: Fantasia, aventura, magia </p>
                    <p>Autor: J.K. Rowling </p>
                    <p>Editora: Rocco </p>
                    </td>

                    <td className="LivrosLateraldir">
                        <tr>
                            <h3>Estoque:</h3>
                            <p> 6</p>
                        </tr>
                        <tr>
                            <img/>
                        </tr>
                      
                    </td>
                </tr>
            </table>
            <div className="resumo" >
                
                Resumo:
Harry Potter e a Pedra Filosofal é o primeiro livro da série Harry Potter, escrito pela autora britânica J.K. Rowling. A história começa com a introdução do personagem principal, Harry Potter, um órfão que vive com seus tios em uma casa comum em Londres, sem ter ideia de que é um famoso bruxo.
Quando Harry completa 11 anos, ele descobre que é um bruxo e é aceito na Escola de Magia e Bruxaria de Hogwarts. Lá, ele faz novos amigos, como Ron Weasley e Hermione Granger, e começa a aprender sobre a magia, a história dos bruxos e a verdadeira história da sua família.
Enquanto isso, Harry descobre que existe uma pedra lendária e poderosa, a Pedra Filosofal, que pode conceder vida eterna e riqueza ilimitada. Harry e seus amigos embarcam em uma aventura perigosa para encontrar a Pedra e protegê-la das mãos erradas.
O livro é cheio de mistérios, ação, magia e suspense, e é um favorito de muitos leitores de todas as idades. Ele estabeleceu a base para a série Harry Potter, que se tornou uma das mais populares e influentes da história da literatura infanto-juvenil.
                
            </div>

            <center>
                <button >
                    editar
                </button>
            </center>
    </div>
    );
}

export default LivrosInfo;