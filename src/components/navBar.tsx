import {useState} from "react";

function NavBar() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="fixed top-0 right-0 mx-5 z-50 bg-transparent border-0 backdrop-blur-3xl backdrop-grayscale ">
        <div className="relative">
          <button
            className="w-full inline-flex justify-end py-4 px-2"
            type="button"
          >
            <svg
              onClick={() => setMenu((prev) => !prev)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="hover:cursor-pointer"
            >
              <path d="M3 12h18" />
              <path d="M3 18h18" />
              <path d="M3 6h18" />
            </svg>
          </button>
          {menu === true ? (
            <div
              onBlur={() => setMenu((prev) => !prev)}
              className="absolute top-full right-0 bg-[#171717] border border-[#3d3d3d] p-10 rounded-md"
            >
              <div className="w-full">
                <ul className="flex flex-col space-y-2">
                  <li className="">
                    <a
                      href="#"
                      className="text-md  text-gray-200 hover:border-b-1 hover:border-gray-200"
                    >
                      Inicio
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#Estudios"
                      className="text-md  text-gray-200 hover:border-b-1 hover:border-gray-200"
                    >
                      Estudios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Habilidades"
                      className="text-md text-gray-200  hover:border-b-1 hover:border-gray-200"
                    >
                      Habilidades
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Proyectos"
                      className="text-md text-gray-200  hover:border-b-1 hover:border-gray-200"
                    >
                      Proyectos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Sobremi"
                      className="text-md text-gray-200  hover:border-b-1 hover:border-gray-200"
                    >
                      Sobre mí
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:alejopsornal@gmail.com"
                      className="text-md text-gray-200  hover:border-b-1 hover:border-gray-200"
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
