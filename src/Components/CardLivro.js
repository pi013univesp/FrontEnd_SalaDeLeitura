import React from "react";
import Carousel from 'react-elastic-carousel';
import './carousel.css';

export default function CardLivro() {
  const breakPoints = [
    {width: 900, itemsToShow: 5},
  ]

  const fotos = [
    { 
      id: 0,
      link: "https://m.media-amazon.com/images/I/81PHloIwKnL.jpg",
      alt: "capa livro harry potter e as reliquias da morte"
    },
    { 
      id: 1,
      link: "https://a-static.mlcdn.com.br/800x560/livro-alice-no-pais-das-maravilhas-capa-brochura-com-verniz-localizado-editora-carvalho-mais-poster/carvalhoeditora/edit-007/82dee9b8f3c17d9ad171998426fb42e0.jpeg",
      alt: "capa livro alice no pais das maravilhas"
    },
    { 
      id: 2,
      link: "https://m.media-amazon.com/images/I/91wJzyhRfkL.jpg",
      alt: "capa livro as cronicas de narnia"
    },
    { 
      id: 3,
      link: "https://http2.mlstatic.com/D_NQ_NP_881356-MLU50455408885_062022-O.jpg",
      alt: "capa livro o pequeno principe"
    },
    { 
      id: 4,
      link: "http://s2.glbimg.com/ZTYbsZ1FOccT-63DFFpRf_-9kLk=/e.glbimg.com/og/ed/f/original/2017/07/03/179547_1gg.jpg",
      alt: "capa livro harry potter e a pedra filosofal"
    },
    { 
      id: 5,
      link: "https://m.media-amazon.com/images/I/81PHloIwKnL.jpg",
      alt: "capa livro harry potter e as reliquias da morte"
    },
    { 
      id: 6,
      link: "https://a-static.mlcdn.com.br/800x560/livro-alice-no-pais-das-maravilhas-capa-brochura-com-verniz-localizado-editora-carvalho-mais-poster/carvalhoeditora/edit-007/82dee9b8f3c17d9ad171998426fb42e0.jpeg",
      alt: "capa livro alice no pais das maravilhas"
    },
    { 
      id: 7,
      link: "https://m.media-amazon.com/images/I/91wJzyhRfkL.jpg",
      alt: "capa livro as cronicas de narnia"
    },
    { 
      id: 8,
      link: "https://http2.mlstatic.com/D_NQ_NP_881356-MLU50455408885_062022-O.jpg",
      alt: "capa livro o pequeno principe"
    },
    { 
      id: 9,
      link: "http://s2.glbimg.com/ZTYbsZ1FOccT-63DFFpRf_-9kLk=/e.glbimg.com/og/ed/f/original/2017/07/03/179547_1gg.jpg",
      alt: "capa livro harry potter e a pedra filosofal"
    },
  ]

  return (
    <div className="Card_livro">
      <center>
        <h2 className="Cards">Livros mais lidos da semana</h2>
        <div>
          <Carousel breakPoints= {breakPoints} >
            {
              fotos.map((foto) => {
                return(
                  <div className="Carrossel" key={foto.id}>
                    <img src={foto.link} alt={foto.alt}/>
                  </div>
                )
              })
            }
          </Carousel>
        </div>
      </center>
    </div>
  );
}
