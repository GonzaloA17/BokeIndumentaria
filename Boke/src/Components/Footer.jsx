import { FaInstagram } from "react-icons/fa";
import img from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className='bg-red-900 text-white lg:px-48 px-4 py-20'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-20'>
                <div className='mb-4 md:mb-0 '>
                    <span className='text-3xl font-semibold text-stone-900 py-2 uppercase '>
                        <img src={img} height={400} width={400} className="object-cover w-full rounded-md " alt="Logo" />
                    </span>
                </div>
                <div className='mb-4 md:mb-0'>
                    <h2 className='text-[24px] font-semibold text-stone-900 py-2 uppercase'>Ubicación</h2>
                    <ul className='text-[20px] my-4'>
                        <li className='my-2'>Mar del Plata</li>
                        <li className='my-2'>Argentina</li>
                    </ul>
                </div>
                <div className='mb-4 md:mb-0'>
                    <h2 className='text-[24px] font-semibold text-stone-900 py-2 uppercase'>¡Realizamos envios!</h2>
                    <p className='text-[20px] my-4'>Obtene tu diseño personalizado</p>
                </div>

                <div className='mb-4 md:mb-0'>
                    <h2 className='text-[24px] font-semibold text-stone-900 py-2 uppercase'>Seguinos</h2>
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/boke.estilo.africano/?hl=es">
                            <FaInstagram className="text-[40px] rounded-full p-1" />
                        </a>
                    </div>
                </div>
                <div className='mb-4 md:mb-0'>
                    <h2 className='text-[24px] font-semibold text-stone-900 py-2 uppercase'>Contacto</h2>
                    <p className='text-[20px] my-4'>mariaceciliamargiotta@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
