import Logo from "/logo.png";
import { useState } from 'react'; // Importa useState si aún no lo has hecho

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del menú

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Función para alternar la visibilidad del menú
  };

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl py-5 px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home |</span>
              <img
                className="w-96"
                fill="none"
                src="/logoc.png"
              />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-2xl">
                <li>
                  <a
                    className="text-secondary transition hover:text-gray-500/75"
                    href="/"
                  >
                    INICIO
                  </a>
                </li>

                <li>
                  <a
                    className="text-secondary transition hover:text-gray-500/75"
                    href="/nosotros"
                  >
                   NOSOTROS
                  </a>
                </li>

                <li>
                  <a
                    className="text-secondary transition hover:text-gray-500/75"
                    href="/eventos"
                  >
                    EVENTOS
                  </a>
                </li>            
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={toggleMenu} // Toggle para abrir/cerrar el menú
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menú desplegable para dispositivos móviles */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-2 text-2xl">
            <li>
              <a
                className="text-secondary transition hover:text-gray-500/75"
                href="/"
              >
                INICIO
              </a>
            </li>
            <li>
              <a
                className="text-secondary transition hover:text-gray-500/75"
                href="/nosotros"
              >
                NOSOTROS
              </a>
            </li>
            <li>
              <a
                className="text-secondary transition hover:text-gray-500/75"
                href="/eventos"
              >
                EVENTOS
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
