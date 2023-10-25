import './forum.css';
import React from "react";
import { Link } from 'react-router-dom';





function Homeforum() {

  return (
    <>
      <div className=''>
        <center>
          <h1 className='titulopagforum'>Fórums temáticos:</h1>
          <div className='Listaforums'>

            <ul>
              <Link to="/cada-forum">
                <div className="capaforum"> 1 </div>
                <p> Forum 1 </p>
              </Link>
            </ul>
            <ul>
              <Link to="#">
                <div className="capaforum"> 2 </div>
                <p> Forum 2 </p>
              </Link>
            </ul>
            <ul>
              <Link to="#">
                <div className="capaforum"> 3 </div>
                <p> Forum 3 </p>
              </Link>
            </ul>
            <ul>
              <Link to="#">
                <div className="capaforum"> 4 </div>
                <p> Forum 4 </p>
              </Link>
            </ul>
            <ul>
              <Link to="#">
                <div className="capaforum"> 5 </div>
                <p> Forum 5 </p>
              </Link>
            </ul>
            <ul>
              <Link to="#">
                <div className="capaforum"> 6 </div>
                <p> Forum 6 </p>
              </Link>
            </ul>
            <ul>
              <Link to="#">
                <div className="capaforum"> 7 </div>
                <p> Forum 7 </p>
              </Link>
            </ul>
            <ul>
              <Link to="#">
                <div className="capaforum"> 8 </div>
                <p> Forum 8 </p>
              </Link>
            </ul>
            <ul>
              <Link to="#">
                <div className="capaforum"> 9 </div>
                <p> Forum 9 </p>
              </Link>
            </ul>
            <ul>
              <Link to="#">
                <div className="capaforum"> 10 </div>
                <p> Forum 10 </p>
              </Link>
            </ul>

            
          </div>
        </center>
      </div>
    </>
  );
}

export default Homeforum;
