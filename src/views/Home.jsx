const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <img
          className="w-full"
          src="/FondoBienvenidosC2023.2.jpg"
          alt="Fondo de bienvenida"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="md:text-7xl font-bold">CANACINTRA</h1>
          <h1 className="md:text-7xl font-bold">Acapulco</h1>
        </div>
      </div>
      <div className="md:py-28 py-5 flex items-center justify-center">
        <div className="md:w-9/12 w-11/12 text-seconday text-justify text-base md:text-2xl">
          <p>
            La Cámara Nacional de la Industria de Transformación CANACINTRA es
            el organismo que representa al Sector Industrial de México. Tiene
            como objetivo fomentar la competitividad y la productividad de las
            empresas, apoyándolas para que se mantengan en constante
            actualización y se conviertan en agentes innovadores socialmente
            responsables. Por su cobertura, representatividad e infraestructura,
            CANACINTRA es la cámara más importante de toda Latinoamérica.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
