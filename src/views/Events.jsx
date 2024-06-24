const Events = () => {
  const EventoCard = ({ imageSrc, date, title, description }) => {
    return (
      <div className="flex justify-center">
        <div className="lg:w-[360px] w-11/12 border rounded-xl">
          <img
            className="w-full rounded-t-xl lg:h-[200px] h-[300px] object-cover"
            src={imageSrc}
            alt=""
          />
          <div>
            <p className="w-4/12 text-center text-white p-1 bg-tertiary">
              {date}
            </p>
          </div>
          <div className="px-5 pb-5">
            <h1 className="text-tertiary text-lg font-bold">{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  };
  const eventos = [
    {
      imageSrc: "/feria.jpg",
      date: "31/05/2024",
      title: "Primera Feria Empresarial CANACINTRA Acapulco 2024",
      description:
        "Celebramos la primera feria empresarial CANACINTRA Acapulco 2024, todo un éxito y se cumplieron todos los objetivos.",
    },
    {
      imageSrc: "/tecnm.jpg",
      date: "09/05/2024",
      title:
        "“Necesidades y perfiles de profesionistas del sector empresarial en la vida de Acapulco”",
      description:
        "El presidente de la CANACINTRA-Acapulco impartió la conferencia “Necesidades y perfiles de profesionistas del sector empresarial en la vida de Acapulco”, a los estudiantes y docentes de las carreras de Ingeniería Electromecánica y Arquitectura del Instituto Tenologico de Acapulco",
    },
    {
      imageSrc: "/COPLADEMUN.jpg",
      date: "24/02/2024",
      title: "Primera sesión ordinaria del COPLADEMUN 2024",
      description:
        "Se celebró en sala de cabildo Juan R. Escudero donde se analizó la inversión pública 2023 y se aprobó la nueva inversión de obra pública 2024 .Con  mi participación  solicite la revisión del compendio",
    },
    {
      imageSrc: "/COPLADEG.jpg",
      date: "26/01/2024",
      title: "CANACINTRA Acapulco Participa en Sesión Plenaria del COPLADEG",
      description:
        "CANACINTRA Acapulco asistió a la sesión del COPLADEG en Chilpancingo, donde la Gobernadora Evelin Salgado tomó protesta al comité. Se anunciaron fondos para la reconstrucción de Acapulco y Coyuca tras el huracán Otis, y planes para mejorar la educación, infraestructura y economía.",
    },
    {
      imageSrc: "/sectores.jpg",
      date: "05/12/2023",
      title: "Reunión de Sectores Empresariales de Acapulco",
      description:
        "Agradecemos la invitación a CANACINTRA Acapulco para reunirnos con Carlos Slim, Rodrigo Alonso Herrera, Arturo Elías Ayub y otros empresarios, quienes contribuirán a la restauración económica, social y cultural de Acapulco, escuchando las necesidades del sector empresarial local.",
    },
    {
      imageSrc: "/totis.jpg",
      date: "25/11/2023",
      title: "Apoyo de CANACINTRA Uruapan Michoacán a Acapulco",
      description:
        "La delegación de CANACINTRA Uruapan Michoacán ha enviado víveres a Acapulco para apoyar a las familias locales. Agradezco a mi mesa directiva por su dedicación en la organización de estas donaciones y la logística involucrada.",
    },
    {
      imageSrc: "/saludo.jpg",
      date: "20/10/2023",
      title: "Saludo a Amigos en la Convención Nacional de CANACINTRA",
      description:
        "Un placer saludar a Waldo Carrasco, presidente de CANACINTRA Tabasco, y a Carla Morales, expresidenta, en la Convención Nacional de Delegaciones, Sectores y Ramas celebrada en Querétaro.",
    },
    {
      imageSrc: "/apertura_programas_financiamiento.jpg",
      date: "08/05/2023",
      title: "Invitación a la Apertura de Programas de Financiamiento",
      description:
        "La Secretaría de Fomento y Desarrollo Económico de Guerrero, encabezada por Teodora Ramírez Vega, y la gobernadora Evelyn Cecia Salgado Pineda presentaron los programas de financiamiento para mipymes 2023, destacando su apoyo al sector empresarial.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-11 font-bold text-tertiary text-5xl">
        <p>EVENTOS</p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-11">
        {eventos.map((evento, index) => (
          <EventoCard
            key={index}
            imageSrc={evento.imageSrc}
            date={evento.date}
            title={evento.title}
            description={evento.description}
          />
        ))}
      </div>
    </div>
  );
};
export default Events;
