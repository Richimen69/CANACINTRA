const About = () => {
  return (
    <div className="flex flex-col  items-center justify-center">
      <div className="w-full">
        <img src="/about.jpg" alt="" />
      </div>
      <div className="md:w-5/12 w-11/12 md:py-28 py-10 text-secondary">
        <p className="md:text-5xl text-xl font-bold text-center md:pb-11 pb-5">NOSOTROS</p>
        <p className="md:text-2xl text-base">
          <strong>Canacintra Acapulco</strong> representa, promueve y sirve a
          los intereses de la comunidad industrial. A través de nuestros
          servicios generamos valor y fomentamos la integración y la
          competitividad de nuestros afiliados.
        </p>
      </div>
      <div className="py-10 md:p-10 grid grid-cols-2 md:gap-11 bg-tertiary text-white">
        <div className="p-2">
          <div className="flex items-center justify-center">
            <img
              className="rounded-full object-cover md:h-[400px] h-[200px] shadow-2xl"
              src="/presidente.jpg"
              alt=""
            />
          </div>
          <div className="py-5 flex flex-col items-center justify-center">
            <p className="md:text-lg text-center">ING. JOSÉ MARIO MORENO ROJAS</p>
            <p className="md:text-lg text-center">PRESIDENTE</p>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <div className="md:w-9/12 w-11/12">
            <div className="pb-5">
              <h1 className="lg:text-2xl font-bold">Misión</h1>
              <p className="md:text-lg text-sm">
                Representar firmemente en el marco de los valores éticos, los
                intereses del sector empresarial, influyendo eficazmente en la
                competitividad e integración de empresas, sectores, regiones,
                satisfaciendo a los asociados a través de servicios de calidad.
              </p>
            </div>
            <div>
              <h1 className="md:text-2xl font-bold">Visión</h1>
              <p className="md:text-lg text-sm">
                Ser el organismo modelo por su efectiva representatividad y alto
                nivel competitivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
