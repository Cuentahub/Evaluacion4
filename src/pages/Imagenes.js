import React from 'react';

function Imagenes() {
  return (
    <div id="carouselExampleIndicators" className="carousel">
      <div className="col-sm-12 col-m-12 col-lg-12 col-xl-12 bg-dark">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <h1 className="publi">Imágenes de animales adorables</h1>
          <div className="carousel-item active">
            <img src="./img/p1.jpg" className="d-block w-50" alt="Los nueva receta de Snacks de Frexadin" />
          </div>
          <div className="carousel-item">
            <img src="./img/p2.avif" className="d-block w-50" alt="Hills nos trae sus últimos productos" />
          </div>
          <div className="carousel-item">
            <img src="./img/p3.webp" className="d-block w-50" alt="Nuevos diseños para invierno" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Imagenes;
