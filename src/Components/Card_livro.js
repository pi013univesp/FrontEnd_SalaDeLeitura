import React from "react";
import Carousel from 'react-elastic-carousel';
import './carousel.css';

export default function Card_livro() {
  const breakPoints = [
    {width: 900, itemsToShow: 5},
    
  ]

  return (
    <div className="Card_livro">
        <center>
        <h2>Livros mais lidos da semana</h2>
        <div>
      <Carousel breakPoints= {breakPoints} >
        <div className="Carrossel" >
        <img src="https://m.media-amazon.com/images/I/81PHloIwKnL.jpg" />
        </div>
        <div className="Carrossel" >
        <img src="https://a-static.mlcdn.com.br/800x560/livro-alice-no-pais-das-maravilhas-capa-brochura-com-verniz-localizado-editora-carvalho-mais-poster/carvalhoeditora/edit-007/82dee9b8f3c17d9ad171998426fb42e0.jpeg" />
        </div>
        <div className="Carrossel" >
        <img src="https://m.media-amazon.com/images/I/91wJzyhRfkL.jpg" />
        </div>
        <div className="Carrossel" >
        <img src="https://http2.mlstatic.com/D_NQ_NP_881356-MLU50455408885_062022-O.jpg" />
        </div>
        <div className="Carrossel" >
        <img src="http://s2.glbimg.com/ZTYbsZ1FOccT-63DFFpRf_-9kLk=/e.glbimg.com/og/ed/f/original/2017/07/03/179547_1gg.jpg" />
        </div>
        <div className="Carrossel" >
        <img src="http://colorindonuvens.files.wordpress.com/2013/08/harry-potter-livro-1-uk-canada-austrc3a1lia.jpg" />
        </div>
        <div className="Carrossel" >
        <img src="https://m.media-amazon.com/images/I/81PHloIwKnL.jpg" />
        </div>
        <div className="Carrossel" >
        <img src="https://a-static.mlcdn.com.br/800x560/livro-alice-no-pais-das-maravilhas-capa-brochura-com-verniz-localizado-editora-carvalho-mais-poster/carvalhoeditora/edit-007/82dee9b8f3c17d9ad171998426fb42e0.jpeg" />
        </div>
        <div className="Carrossel" >
        <img src="https://m.media-amazon.com/images/I/91wJzyhRfkL.jpg" />
        </div>
        <div className="Carrossel" >
        <img src="https://http2.mlstatic.com/D_NQ_NP_881356-MLU50455408885_062022-O.jpg" />
        </div>
        <div className="Carrossel" >
        <img src="http://s2.glbimg.com/ZTYbsZ1FOccT-63DFFpRf_-9kLk=/e.glbimg.com/og/ed/f/original/2017/07/03/179547_1gg.jpg" />
        </div>
        <div className="Carrossel" >
        <img src="http://colorindonuvens.files.wordpress.com/2013/08/harry-potter-livro-1-uk-canada-austrc3a1lia.jpg" />
        </div>
      </Carousel>
      </div>
      <p>&copy;Sala de Leitura-Univesp 2023</p>
      </center>

    </div>
  );
}
