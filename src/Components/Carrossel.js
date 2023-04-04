import React from "react";
import "../App.css";

    const carrossel = document.querySalector(".carrossel"),
    firstImg = carrossel.querySelectorAll("img")[0];
    arrowIcons = document.querrySelectorAll(".Wrapper i");

    let isDragStart = false, prevPageX, prevScrollLeft;
    let firstImgWidth = firstImg.clientWidth + 14;
    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            carrossel.scowLeft += icon.id =="left" ? - firstImgWidth : firstImgWidth;
        })
    })
    

    const dragStart = (e) => {      
        isDragStart = true;
        prevPageX = e.pageX;
        prevScrollLeft = carrossel.scrowLeft;
    }
    const dragging = (e) => {
        if(!isDragStart) return;
        e.preventDefaut();
        let positionDiff = e.pageX - prevPageX
        carrossel.scrollLeft = prevScrollLeft - positionDiff;
    }
    const dragStop = () => {
        isDragStart = false;
    }

const Carrossel = () => {

    return (
        <div className="AlinharCarrossel">
        <div className="Wrapper">
            <i id="left" >&#9664; </i>
            <div className="carrossel">
                <img src="https://m.media-amazon.com/images/I/81PHloIwKnL.jpg" />
                <img src="https://m.media-amazon.com/images/I/81PHloIwKnL.jpg" />
                <img src="https://m.media-amazon.com/images/I/81PHloIwKnL.jpg" />
                <img src="https://m.media-amazon.com/images/I/81PHloIwKnL.jpg" />
                <img src="https://m.media-amazon.com/images/I/81PHloIwKnL.jpg" />
                <img src="https://m.media-amazon.com/images/I/81PHloIwKnL.jpg" />
                <img src="https://m.media-amazon.com/images/I/81PHloIwKnL.jpg" />
                <img src="https://m.media-amazon.com/images/I/81PHloIwKnL.jpg" />
                <img src="https://m.media-amazon.com/images/I/81PHloIwKnL.jpg" />

            </div>
            <i id="right">&#9654;</i>
        </div>
        </div>
    );
}

export default Carrossel;

carrossel.addEventListener("mousedown", dragStart);
carrossel.addEventListener("mousemove", dragging);
carrossel.addEventListener("mouseup", dragStop);