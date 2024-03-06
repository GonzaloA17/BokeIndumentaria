import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductForm from './ProductForm';

const Catalogo = () => {
  const [catalogo, setCatalogo] = useState([]);

  const fetchCatalogo = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      setCatalogo(response.data);
    } catch (error) {
      console.error('Error al obtener el catálogo:', error);
    }
  };

  useEffect(() => {
    fetchCatalogo();
  }, []); // Llamada inicial para cargar el catálogo

  return (
    <div>
      <ProductForm updateCatalogo={fetchCatalogo} />
      {/* Renderizar la lista de productos del catálogo */}
      <h2>Catálogo de Productos</h2>
      <ul>
        {catalogo.map((producto) => (
          <li key={producto.id}>
            <Link to={`/detalle/${producto.category}/${producto.id}`}>
              {producto.name} - {producto.category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalogo;