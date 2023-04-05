import React from "react"
import './css/carousel.css'

export const CarouselLivro = () => {

    const fotos = [
        "https://m.media-amazon.com/images/I/81PHloIwKnL.jpg",
        "https://m.media-amazon.com/images/I/81PHloIwKnL.jpg",
        "https://m.media-amazon.com/images/I/81PHloIwKnL.jpg",
        "https://m.media-amazon.com/images/I/81PHloIwKnL.jpg",

    ]

    return (
        <div id="carouselExampleAutoplaying" className="carousel slide  w-100" data-bs-ride="carousel">

            <div className="carousel-inner">
                {
                    fotos.map((element, index) => {
                        return (
                            <div className={index === 0 ? "carousel-item active" : "carousel-item"} key={index} >
                                <img src={element} className="d-block tamanhoResponsivo " alt="..." />
                            </div>
                        )
                    })
                }

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>

    )
}