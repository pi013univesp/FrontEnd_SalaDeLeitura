import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";


const Menu = () => {

    return (
        <center>
        <nav className='Menu' >
            <ul>
                <li>
                    <Link to='/cadastro-livros'>Cadastro Livros</Link>
                </li>
                <li>
                    <Link to='/pesquisar-livros'>Pesquisar Livros</Link>
                </li>
                <li>
                    <Link to='/cadastro-cliente'>Cadastro Clientes</Link>
                </li>
                <li>
                    <Link to='/emprestimos'>Empréstimos</Link>
                </li>
                <li>
                    <Link to='/trilhas'>Trilhas</Link>
                </li>
                <li>
                    <Link to='/mais-alugados'>Mais alugados</Link>
                </li>
            </ul>
        </nav>
        </center>
    );
}

export default Menu;