import {useState} from "react";

function NavBar() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="fixed top-0 right-0 z-50 bg-transparent border-0">
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
              className="absolute top-full right-2 bg-[#171717] border border-[#3d3d3d] rounded-md z-20"
            >
              <div className="w-full">
                <ul className="flex flex-col space-y-2  py-2">
                  <a
                    href="#hero"
                    className="text-md p-2  text-gray-300 hover:text-gray-200 w-36 hover:bg-[#303030]"
                  >
                    🏠 Inicio
                  </a>
                  <a
                    href="#Estudios"
                    className="text-md p-2 text-gray-200 w-36 hover:bg-[#303030]"
                  >
                    📚 Estudios
                  </a>
                  <a
                    href="#Habilidades"
                    className="text-md p-2 text-gray-200 w-36 hover:bg-[#303030]"
                  >
                    💪 Habilidades
                  </a>
                  <a
                    href="#Proyectos"
                    className="text-md p-2 text-gray-200 w-36 hover:bg-[#303030]"
                  >
                    💻 Proyectos
                  </a>
                  <a
                    href="#Sobremi"
                    className="text-md p-2 text-gray-200 w-36 hover:bg-[#303030]"
                  >
                    👨‍💻 Sobre mí
                  </a>
                  <a
                    href="mailto:alejopsornal@gmail.com"
                    className="text-md p-2 text-gray-200 w-36 hover:bg-[#303030]"
                  >
                    ✉️ Contacto
                  </a>
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
