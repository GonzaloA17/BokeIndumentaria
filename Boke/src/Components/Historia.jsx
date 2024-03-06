import React from 'react';
import mujer from '../assets/mujer.jpg';

const Historia = () => {
  return (
    <section id="nuestra-historia" className="py-14 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <h2 className="text-4xl font-arial italic mb-8 text-center md:text-center md:w-1/2 pr-8 text-amber-950">
    Nuestra Historia
        </h2>
        <div className="max-w-2xl md:w-1/2 md:order-first">
          <img
            src={mujer}
            alt="Imagen de la artista"
            className="w-full h-auto rounded-lg mb-8 md:mb-0 md:mr-8"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg leading-relaxed mb-8 text-red-900 font-sans italic">
            ¡Hola a todos! Mi nombre es Cecilia, y me complace compartir un poco sobre mi emocionante viaje en el mundo del arte.
            Boké Estilo Africano surge por el año 2018 cuando emprendimos un viaje a Brasil a estudiar Percusión y Danzas Africanas de Guinea. Abrazar la Cultura Africana desde la danza  y empezar a conocer su folclore me impulsaron a crear esta marca de prendas textiles intervenidas en Serigrafía con simbología proveniente allí (África).
            Boké es una región de Guinea y se caracteriza por sus tierras rojas, terracota y marrones.
          </p>
          <p className="text-lg leading-relaxed mb-8 text-red-900 font-sans italic">
            Vivo en la Ciudad de Mar del Plata desde hace muchos años. Soy autodidacta, el camino que me trajo hasta donde estoy fue la curiosidad por aprender con diferentes personas el arte de diseñar y confeccionar prendas, tomar herramientas de aquí y de allá y un impulso enorme de crear inevitable.
          </p>
          <p className="text-lg leading-relaxed text-red-900 font-sans italic">
            La inspiración para mi trabajo proviene de la técnica Bologan o “ Telas de Barro”. Artesanía ancestral hecha a mano en tela de algodón con arcilla y tintes naturales. Cada experiencia de la vida, ya sea alegre o desafiante, se refleja en mis creaciones. Mi estilo artístico único se ha desarrollado a lo largo del tiempo, y estoy emocionada de compartir mi perspectiva única con el mundo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Historia;
