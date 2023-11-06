import './forum.css';
import React from "react";
import { Link } from 'react-router-dom';

const LinkForum = ( {id} ) => {
  return (
    <ul>
      <Link to={`/cada-forum/${id}`}>
        <div className="capaforum"> {id} </div>
        <p> Forum {id} </p>
      </Link>
    </ul>
  )
} 

function Homeforum() {
  const numForuns = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

  return (
    <>
      <div className=''>
        <center>
          <h1 className='titulopagforum'>Fórums temáticos:</h1>
          <div className='Listaforums'>
            {
              numForuns.map(element => (
                 <LinkForum key={element} id={element} />
              ))
            }
          </div>
        </center>
      </div>
    </>
  );
}

export default Homeforum;
