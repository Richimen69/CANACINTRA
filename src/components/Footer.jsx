import Logo from "/logo.png";
const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center">
              <img src={Logo} alt="Logo" className="w-20" />
              <div className="text-center text-2xl font-bold text-[#081960]">
                <p className="px-2">CANACINTRA ACAPULCO</p>
              </div>
            </div>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="https://www.facebook.com/AcapulcoCANACINTRA"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-gray-900">Dirección</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <p
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Calle Morteros Número 42, Interior 1, Colonia Barranca de la Laja, C.P. 39360
                  </p>
                </li>    
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Contacto</p>

              <ul className="mt-6 space-y-4 text-sm">
              <li>
                    <a
                      className="flex items-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="tel:744 486 7121"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>

                      <span className="flex-1 text-gray-700">744 486 7121</span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="flex items-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="mailto:acapulco@canacintra.org.mx"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                      <span className="flex-1 text-gray-700">
                      acapulco@canacintra.org.mx
                      </span>
                    </a>
                  </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500">&copy; CANACINTRA Acapulco</p>
      </div>
    </footer>
  );
};
export default Footer;
