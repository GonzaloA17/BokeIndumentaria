import img1 from '../assets/tempo.jpg';
import img2 from '../assets/tempo1.jpg';
import img3 from '../assets/tempo2.jpg';
import img4 from '../assets/tempo3.jpg';
import tempo4 from '../assets/tempo4.jpg';

const Carousel = () => {
    return (
        <div className="p-2 px-10 flex flex-col items-center justify-center bg-red-950 ">
           <h1 className="text-[50px] text-3xl italic mb-8 text-amber-300">Temporada 2024</h1>
           <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid cols-1 justify-around gap-20">
                <img data-aos="fade-up"height={400} width={400} className="w-full h-full object-cover flex items-center justify-center font-semibold rounded-3xl p-1 border-2 border-amber-900 b_glow" src={img1} alt="" />
                <img data-aos="fade-down"height={400} width={400} className="w-full h-full object-cover flex items-center justify-center font-semibold  rounded-3xl p-1 border-2 border-amber-900 b_glow" src={img2} alt="" />
                <img data-aos="fade-up"height={400} width={400} className="w-full h-full object-cover flex items-center justify-center font-semibold  rounded-3xl p-1 border-2 border-amber-900 b_glow" src={img3} alt="" />
                <img data-aos="fade-down"height={400} width={400} className="w-full h-full object-cover flex items-center justify-center font-semibold rounded-3xl p-1 border-2 border-amber-900 b_glow" src={img4} alt="" />
           </div>
  
            
        </div>
    );
};
export default Carousel; 
