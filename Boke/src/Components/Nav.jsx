import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import img from "../assets/logo.png";
import { Link as RouterLink } from "react-router-dom"; 



const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  /*const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };*/

  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-amber-900 transition z-50">
        <ul className="text-center text-xl p-20">
        <RouterLink  to="/">
          <li className="my-4 py-4 border-b bg-red-950 hover:bg-stone-700 hover:rounded">
        Home
        </li>
        </RouterLink>
          <Link spy={true} smooth={true} to="nuestra-historia">
            <li className="my-4 py-4 border-b bg-red-950 hover:bg-stone-700 hover:rounded">
            Nuestra Historia
            </li>
          </Link>

          <Link spy={true} smooth={true} to="Temporada">
            <li className="my-4 py-4 border-b bg-red-950 hover:bg-stone-700 hover:rounded">
            Temporada 2024
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Clientes">
            <li className="my-4 py-4 border-b bg-red-950 hover:bg-stone-700 hover:rounded">
              Clientes
            </li>
          </Link>
             {/* Lo sacamos por ahora para que no haya ingreso 
             <Link spy={true} smooth={true} to="Login">
            <li className="my-4 py-4 border-b bg-red-950 hover:bg-stone-700 hover:rounded">
              Login Admin
            </li>
          </Link>*/}
         
        </ul>
      </div>
    </>
  );

  return (
    <nav>
      <div className="h-20 flex justify-between z-50 text-amber-100 lg:py-7 px-20 py-4 border-b border-amber-800 bg-amber-800">
        <div className="flex items-center flex-1 h-auto md-2 lg:w-1/2">
        <span className="text-3xl font-sans text-amber-500 h-[80px] lg:h-[80px]">
  <img src={img}  className="object-cover ml-2 max-h-full h-auto" alt="Logo" />
</span>

        </div>
        <div className="lg:flex md:flex lg:flex-1 center justify-center items font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[20px]">

            <RouterLink  to="/">
            <li className="hover:text-yellow-200 transition border-b-2 border-amber-800 hover:border-black cursor-pointer">
                Home
                </li>
              </RouterLink>
              <Link spy={true} smooth={true} to="nuestra-historia">
                <li className="hover:text-yellow-200 transition border-b-2 border-amber-800 hover:border-black cursor-pointer">
                Nuestra Historia
                </li>
              </Link>

              <Link spy={true} smooth={true} to="Temporada">
                <li className="hover:text-yellow-200 transition border-b-2 border-amber-800 hover:border-black cursor-pointer">
                Temporada 2024
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Clientes">
                <li className="hover:text-yellow-200 transition border-b-2 border-amber-800 hover:border-black cursor-pointer">
                Clientes
                </li>
              </Link>
                <li className="hover:text-yellow-200 transition border-b-2 border-amber-800 hover:border-black cursor-pointer dropdown">
                {/*<button onClick={toggleLogin}>Login Admin</button>*/}
                </li>
            </ul>
          </div>
        </div>
       {/* lo sacamos por ahora
       <Link spy={true} smooth={true} to="Login">
            <li className="my-4 py-4 border-b bg-red-950 hover:bg-stone-700 hover:rounded">
              Login Admin
            </li>
          </Link>
          
        {showLogin && <LoginAdmin />}*/} 
        <div>{click && content}</div>
           <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};
export default Nav;
