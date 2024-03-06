import React from 'react';
import Mochilas from '../assets/Mochilas.jpg';
import Pantalones from '../assets/Pantalones.jpg';
import Remerones from '../assets/Remerones.jpg';
import Musculosas from '../assets/musculosas.jpg';
import Camperas from '../assets/Camperas.jpg';
import Pilusos from '../assets/Pilusos.jpg';
import { Link } from "react-router-dom";


const Articulos = () => {
  return (
    <section id="articulos" className="main-content py-10 bg-red-950">
      {/* Dentro de la sección de Artículos */}
      <div className="centered2">
        <h2 className="contact-heading text-center font-sans italic mb-8 text-[30px]  text-amber-600">Artesanía ancestral hecha a mano</h2>
        <div className="grid grid-cols-3 gap-8">
        <Link to="/detalle/mochilas/1"> {/* Ajusta la categoría y el ID según tu estructura */}
            <div className="item relative overflow-hidden bg-white border border-gray-300 rounded-md transition-transform transform hover:scale-105">
              <img
                src={Mochilas}
                alt="Mochilas"
                className="item-img w-full h-64 object-cover rounded-md"
              />
              <p className="text-center mt-2">Mochilas de tela</p>
            </div>
          </Link>
          <Link to="/detalle/pantalones/1"> {/* Ajusta la categoría y el ID según tu estructura */}
            <div className="item relative overflow-hidden bg-white border border-gray-300 rounded-md transition-transform transform hover:scale-105">
              <img
                src={Pantalones}
                alt="Pantalones"
                className="item-img w-full h-64 object-cover rounded-md"
              />
              <p className="text-center mt-2">Pantalones</p>
              </div>
          </Link>
          <Link to="/detalle/remerones/1"> {/* Ajusta la categoría y el ID según tu estructura */}
          <div className="item relative overflow-hidden bg-white border border-gray-300 rounded-md transition-transform transform hover:scale-105">
            <img
              src={Remerones}
              alt="Remerones"
              className="item-img w-full h-64 object-cover rounded-md"
            />
            <p className="text-center mt-2">Remerones y Remerones Vestidos</p>
          </div>
          </Link>
          <Link to="/detalle/musculosas/1"> {/* Ajusta la categoría y el ID según tu estructura */}
          <div className="item relative overflow-hidden bg-white border border-gray-300 rounded-md transition-transform transform hover:scale-105">
            <img
              src={Musculosas}
              alt="Musculosas"
              className="item-img w-full h-64 object-cover rounded-md"
            />
            <p className="text-center mt-2">Musculosas</p>
          </div>
          </Link>
          <Link to="/detalle/camperas/1"> {/* Ajusta la categoría y el ID según tu estructura */}
          <div className="item relative overflow-hidden bg-white border border-gray-300 rounded-md transition-transform transform hover:scale-105">
            <img
              src={Camperas}
              alt="Camperas con Capuchas"
              className="item-img w-full h-64 object-cover rounded-md"
            />
            <p className="text-center mt-2">Camperas</p>
          </div>
          </Link>
          <Link to="/detalle/pilusos/1"> {/* Ajusta la categoría y el ID según tu estructura */}
          <div className="item relative overflow-hidden bg-white border border-gray-300 rounded-md transition-transform transform hover:scale-105">
            <img
              src={Pilusos}
              alt="Pilusos"
              className="item-img w-full h-64 object-cover rounded-md"
            />
            <p className="text-center mt-2">Pilusos</p>
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Articulos;

