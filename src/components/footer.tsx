function Footer() {
  return (
    <footer className="mt-30 w-full">
      <div className="w-full py-5 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-200 sm:text-center ">
          Alejandro Velez Gomez 🦀
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-200  sm:mt-0">
          <li>
            <a href="/#hero" className="hover:underline me-4 md:me-6">
              Inicio
            </a>
          </li>
          <li>
            <a href="mailto:alejopsornal@gmail.com" className="hover:underline">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
