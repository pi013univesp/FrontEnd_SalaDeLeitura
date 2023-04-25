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
                    <Link to='#'>Pesquisar Livros</Link>
                </li>
                <li>
                    <Link to='#'>Cadastro Clientes</Link>
                </li>
                <li>
                    <Link to='/emprestimos'>Empréstimos</Link>
                </li>
            </ul>
            {/* <div className='Buscar'>
            <h3>Buscar: </h3>
            <input></input>

            </div> */}
        </nav>
        </center>
    );
}

export default Menu;