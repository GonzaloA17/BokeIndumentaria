import React from 'react';
import cliente from '../assets/Cliente satisfecho.jpg';
import cliente1 from "../assets/Cliente satisfecho1.jpg";
import cliente2 from '../assets/Cliente satisfecho2.jpg';
import cliente3 from '../assets/Cliente satisfecho3.jpg';
import cliente4 from '../assets/Cliente satisfecho4.jpg';
import cliente5 from '../assets/Cliente satisfecho5.jpg'


const Clientes = () => {
  return (

 <section id="Clientes" className="main-content py-10 bg-red-950">  
      <div class="centered">
        <h2 className="contact-heading text-center font-sans italic mb-8 text-[30px]  text-amber-600">Nuestros clientes</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="item relative overflow-hidden bg-white border border-gray-300 rounded-md transition-transform transform hover:scale-105">        
              <img
                src={cliente}
                alt="cliente satisfecho"
                className="item-img w-full h-64 object-cover rounded-md"
               />
             </div>
             <div className="item relative overflow-hidden bg-white border border-gray-300 rounded-md transition-transform transform hover:scale-105">
              <img
              src={cliente1}
              alt="cliente satisfecho1"
              className="item-img w-full h-64 object-cover rounded-md"
              />
             </div>
             <div className="item relative overflow-hidden bg-white border border-gray-300 rounded-md transition-transform transform hover:scale-105">        
              <img
                src={cliente2}
                alt="cliente satisfecho2"
                className="item-img w-full h-64 object-cover rounded-md"
               />
             </div>
             <div className="item relative overflow-hidden bg-white border border-gray-300 rounded-md transition-transform transform hover:scale-105">        
              <img
                src={cliente3}
                alt="cliente satisfecho3"
                className="item-img w-full h-64 object-cover rounded-md"
               />
             </div>
             <div className="item relative overflow-hidden bg-white border border-gray-300 rounded-md transition-transform transform hover:scale-105">        
              <img
                src={cliente4}
                alt="cliente satisfecho4"
                className="item-img w-full h-64 object-cover rounded-md"
               />
             </div>
             <div className="item relative overflow-hidden bg-white border border-gray-300 rounded-md transition-transform transform hover:scale-105">        
              <img
                src={cliente5}
                alt="cliente satisfecho5"
                className="item-img w-full h-64 object-cover rounded-md"
               />
             </div>
        </div>
      </div>
    </section>
  );
};

export default Clientes;