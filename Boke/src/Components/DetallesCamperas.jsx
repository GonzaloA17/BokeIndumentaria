import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CamperaImage1 from '../assets/Articulos/DetalleC1.png';
import CamperaImage2 from '../assets/Articulos/DetalleC2.png';
import CamperaImage3 from '../assets/Articulos/DetalleC3.png';
import CamperaImage4 from '../assets/Articulos/DetalleC4.png';
import CamperaImage5 from '../assets/Articulos/DetalleC5.png';
import CamperaImage6 from '../assets/Articulos/DetalleC6.png';
import CamperaImage7 from '../assets/Articulos/DetalleC7.png';
import Footer from './Footer';
import { IoIosArrowDropleftCircle } from "react-icons/io";

const DetallesCamperas = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const producto = {
    nombre: 'Descripción del Artículo',
    descripcion:
      'Campera con capucha y bolsillo canguro realizados en Tusor en tonos tierra(Arena/Canela/Visón). Cuidados: Lavar con agua fría, centrifugado medio, lavado rápido, plancha media. Producto 100% Artesanal',
    fotos: [CamperaImage1, CamperaImage2,CamperaImage3, CamperaImage4, CamperaImage5, CamperaImage6, CamperaImage7],
    precio: 'Consultar por talles disponibles.',
    whatsappLink: 'https://wa.me/542235598969',
  };

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % producto.fotos.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + producto.fotos.length) % producto.fotos.length);
  };

  return (
    <>
      <div>
        <h2 href="#" onClick={() => window.history.back()} className="text-black-500 hover:underline flex items-center mt-4">
           <span className="mr-2"><IoIosArrowDropleftCircle /></span> Volver
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row p-4">
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4 lg:self-center">Camperas</h1>
          <div className="lg:max-w-md mx-auto relative w-full h-96 md:h-80 sm:h-64">
            {producto.fotos.map((foto, index) => (
              <img
                key={index}
                src={foto}
                alt={`Foto ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transform transition-transform duration-300 ${
                  index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <button onClick={prevImage} className="text-white bg-red-950 px-2 py-1 rounded">
              Anterior
            </button>
            <button onClick={nextImage} className="text-white bg-red-950 px-2 py-1 rounded">
              Siguiente
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 p-4">
          <h2 className="text-xl font-semibold">{producto.nombre}</h2>
          <p className="text-gray-600 mt-2 lg:mt-4">{producto.descripcion}</p>
          <p className="text-2xl font-bold mt-8">{producto.precio}</p>
          <Link to={producto.whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded">
              Comprar por WhatsApp
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetallesCamperas;
