import React from 'react';
import Carousel from './Carousel';
import tempo from '../assets/tempo.jpg';
import tempo1 from '../assets/tempo1.jpg';
import tempo2 from '../assets/tempo2.jpg';
import tempo3 from '../assets/tempo3.jpg';
import tempo4 from '../assets/tempo4.jpg';

const images = [tempo, tempo1, tempo2, tempo3, tempo4];

const Temporada = () => {
  return (
    <div id='Temporada'>
      {/* Otro contenido */}
      <Carousel images={images} />
    </div>
  );
};

export default Temporada;
