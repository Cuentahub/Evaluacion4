import React from 'react';

function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <h1>ANIMAL LOVERS</h1>
        <p>Comunidad enfocada en el cuidado de los peluditos</p>
      </header>
      <nav>
        <ul>
          <li><a href="#caracteristicas">Características</a></li>
          <li><a href="#imagenes">Imágenes</a></li>
          <li><a href="#quienes-somos">Quiénes Somos</a></li>
        </ul>
      </nav>
      <section id="caracteristicas">
        <h2>Características</h2>
        <p>Características principales de Animal Lovers y cómo ayuda a los amantes de los animales.</p>
      </section>
      <section id="imagenes">
        <h2>Imágenes</h2>
        <p>En esta sección puedes ver imágenes de animales adorables y felices que han sido cuidados por Animal Lovers.</p>
      </section>
      <section id="quienes-somos">
        <h2>Quiénes Somos</h2>
        <p> información sobre el equipo detrás de Animal Lovers y la misión de la comunidad.</p>
      </section>
      <footer>
        <p>Contacto: animallovers@example.com</p>
      </footer>
    </div>
  );
}

export default LandingPage;
