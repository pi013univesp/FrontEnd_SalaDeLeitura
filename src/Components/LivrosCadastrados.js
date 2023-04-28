import '../App.css';
import { Link } from "react-router-dom";

const LivrosCadastrados = () => {

    return (
        <div className='LivrosCadastrados'>
            <div className='CabecarioLivros'>
                <h2>Livros Cadastrados</h2>
            </div>
            <div className='ListaLivros'>
                <table >
                    <tr>
                    <Link to='/editar-livros'><p>Harry Potter e a Pedra Filosofal, de J.K. Rowling</p></Link>
                    <Link to='/editar-livros'><p>As Crônicas de Nárnia, de C.S. Lewis</p></Link>
                    <Link to='/editar-livros'><p>O Pequeno Príncipe, de Antoine de Saint-Exupéry</p></Link>
                    <Link to='/editar-livros'><p>Matilda, de Roald Dahl</p></Link>
                    <Link to='/editar-livros'><p>A Ilha do Tesouro, de Robert Louis Stevenson</p></Link>
                    <Link to='/editar-livros'><p>O Hobbit, de J.R.R. Tolkien</p></Link>
                    <Link to='/editar-livros'><p>O Gato Malhado e a Andorinha Sinhá, de Jorge Amado</p></Link>
                    <Link to='/editar-livros'><p>Alice no País das Maravilhas, de Lewis Carroll</p></Link>
                    <Link to='/editar-livros'><p>Harry Potter e a Pedra Filosofal, de J.K. Rowling</p></Link>
                    <Link to='/editar-livros'><p>As Crônicas de Nárnia, de C.S. Lewis</p></Link>
                    <Link to='/editar-livros'><p>Harry Potter e a Pedra Filosofal, de J.K. Rowling</p></Link>
                    <Link to='/editar-livros'><p>As Crônicas de Nárnia, de C.S. Lewis</p></Link>
                    <Link to='/editar-livros'><p>O Pequeno Príncipe, de Antoine de Saint-Exupéry</p></Link>
                    <Link to='/editar-livros'><p>Matilda, de Roald Dahl</p></Link>
                    <Link to='/editar-livros'><p>A Ilha do Tesouro, de Robert Louis Stevenson</p></Link>
                    <Link to='/editar-livros'><p>O Hobbit, de J.R.R. Tolkien</p></Link>
                    <Link to='/editar-livros'><p>O Gato Malhado e a Andorinha Sinhá, de Jorge Amado</p></Link>
                    <Link to='/editar-livros'><p>Alice no País das Maravilhas, de Lewis Carroll</p></Link>
                    <Link to='/editar-livros'><p>Harry Potter e a Pedra Filosofal, de J.K. Rowling</p></Link>
                    <Link to='/editar-livros'><p>As Crônicas de Nárnia, de C.S. Lewis</p></Link>

                    </tr>
                </table>
            </div>
        </div>

    );
}

export default LivrosCadastrados;