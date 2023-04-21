import '../App.css';

const Menu = () => {

    return (
        <div className='Menu' >
            <table>
                <tr>
                    <td>
                        <a href='#'>Novo</a>
                    </td>
                    <td>
                        <a href='#'>Clientes</a>
                    </td>
                    <td>
                        <a href='#'>Empréstimos</a>
                    </td>
                    <br />
                    <br />
                    <br />
                    <br />
                </tr>
            </table>
            <div className='Buscar'>
            <h3>Buscar: </h3>
            <input></input>

            </div>
        </div>
    );
}

export default Menu;