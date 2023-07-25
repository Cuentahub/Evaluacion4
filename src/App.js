import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Caracteristicas from './pages/Caracteristicas';
import Imagenes from './pages/Imagenes';
import QuienesSomos from './pages/QuienesSomos';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/caracteristicas">Características</Link>
          </li>
          <li>
            <Link to="/imagenes">Imágenes</Link>
          </li>
          <li>
            <Link to="/quienes-somos">Quiénes Somos</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={LandingPage} />
      <Route path="/caracteristicas" component={Caracteristicas} />
      <Route path="/imagenes" component={Imagenes} />
      <Route path="/quienes-somos" component={QuienesSomos} />
    </BrowserRouter>
  );
}

export default App;
