import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  const whatsappNumber = "+5492235598969";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 lg:right-16 bg-green-500 p-4 rounded-full text-white hover:bg-green-600 transition whatsapp-icon"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default Whatsapp;
