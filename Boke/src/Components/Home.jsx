import React from "react";
import { Routes, Route } from "react-router-dom";
import Banner from "./Banner";
import Articulos from "./Articulos";
import Historia from "./Historia";
import Clientes from "./Clientes";
import Temporada from "./Temporada";
import DetallesMochila from "./DetallesMochila";
import DetallesCamperas from "./DetallesCamperas";
import DetallesRemerones from "./DetallesRemerones";
import DetallesPilusos from "./DetallesPilusos";
import DetallesPantalones from "./DetallesPantalones";
import DetallesMusculosas from "./DetallesMusculosas";
import Whatsapp from "./Whatsapp";
import Footer from "./Footer";

const Home = () => {
  return (
    <div id="/">
      <Banner />
      <Routes>
        <Route path="*" element={<Articulos />} />
            <Route path="/detalle/mochilas/:id" element={<DetallesMochila />} />
            <Route path="/detalle/pantalones/:id" element={<DetallesPantalones />} />
            <Route path="/detalle/camperas/:id" element={<DetallesCamperas />} />
            <Route path="/detalle/remerones/:id" element={<DetallesRemerones />} />
            <Route path="/detalle/pilusos/:id" element={<DetallesPilusos />} />
            <Route path="/detalle/musculosas/:id" element={<DetallesMusculosas />} />
      </Routes>
      <Temporada />
      <Historia />
      <Clientes />
      <Whatsapp />
      <Footer />
    </div>
  );
};

export default Home;

