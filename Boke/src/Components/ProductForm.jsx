import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/products', {
        name: productName,
        category: category
      });
      console.log(response.data);
      // mostrar un mensaje de éxito o redirigir a otra página
    } catch (error) {
      console.error('Error al cargar el producto:', error);
      // mostrar un mensaje de error al usuario
    }
  };

  return (
    <div>
      <h2>Cargar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Producto:</label>
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </div>
        <div>
          <label>Categoría:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Seleccione una categoría</option>
            <option value="Mochilas de Tela">Mochilas de Tela</option>
            <option value="Buzos">Buzos</option>
            <option value="Remerones">Remerones</option>
            <option value="Remeron Vestido">Remeron Vestido</option>
            <option value="Camperas">Camperas</option>
            <option value="Pilusos">Pilusos</option>
          </select>
        </div>
        <button type="submit">Cargar Producto</button>
      </form>
    </div>
  );
};

export default ProductForm;
