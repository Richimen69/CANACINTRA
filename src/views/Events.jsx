import React, { useState, useEffect } from "react";

const Events = () => {
  const EventoCard = ({ images, date, title, description }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    const nextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    useEffect(() => {
      const interval = setInterval(() => {
        nextImage();
      }, 3000); // Cambia cada 3 segundos

      return () => clearInterval(interval);
    }, [currentImageIndex]);

    return (
      <div className="flex justify-center">
        <div className="lg:w-[360px] w-11/12 border rounded-xl">
          <div className="relative">
            <div className="overflow-hidden rounded-t-xl relative">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    className="h-[300px] w-full flex-shrink-0 object-cover object-top"
                  />
                ))}
              </div>
            </div>

            <button
              onClick={prevImage}
              className="absolute opacity-50 hover:opacity-100 top-1/2 left-4 transform -translate-y-1/2 text-white p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute opacity-50 hover:opacity-100 top-1/2 right-4 transform -translate-y-1/2 text-white p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </button>
          </div>
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
      images: ["/eventos/feria.jpg", "/eventos/feria2.jpg", "/eventos/feria3.jpg"],
      date: "31/05/2024",
      title: "Primera Feria Empresarial CANACINTRA Acapulco 2024",
      description:
        "Celebramos la primera feria empresarial CANACINTRA Acapulco 2024, todo un éxito y se cumplieron todos los objetivos.",
    },
    {
      images: ["/eventos/tecnm.jpg", "/eventos/tecnm2.jpg","/eventos/tecnm3.jpg"],
      date: "09/05/2024",
      title: "“Necesidades y perfiles de profesionistas del sector empresarial en la vida de Acapulco”",
      description:
        "El presidente de la CANACINTRA-Acapulco impartió la conferencia “Necesidades y perfiles de profesionistas del sector empresarial en la vida de Acapulco”, a los estudiantes y docentes de las carreras de Ingeniería Electromecánica y Arquitectura del Instituto Tenologico de Acapulco",
    },
    {
      images: ["/eventos/COPLADEMUN.jpg", "/eventos/COPLADEMUN2.jpg","/eventos/COPLADEMUN3.jpg"],
      date: "24/02/2024",
      title: "Primera sesión ordinaria del COPLADEMUN 2024",
      description:
        "Se celebró en sala de cabildo Juan R. Escudero donde se analizó la inversión pública 2023 y se aprobó la nueva inversión de obra pública 2024 .Con mi participación solicite la revisión del compendio",
    },
    {
      images: ["/eventos/COPLADEG.jpg", "/eventos/COPLADEG2.jpg",  "/eventos/COPLADEG3.jpg"],
      date: "26/01/2024",
      title: "CANACINTRA Acapulco Participa en Sesión Plenaria del COPLADEG",
      description:
        "CANACINTRA Acapulco asistió a la sesión del COPLADEG en Chilpancingo, donde la Gobernadora Evelin Salgado tomó protesta al comité. Se anunciaron fondos para la reconstrucción de Acapulco y Coyuca tras el huracán Otis, y planes para mejorar la educación, infraestructura y economía.",
    },
    {
      images: ["/eventos/sectores.jpg", "/eventos/sectores2.jpg", "/eventos/sectores3.jpg"],
      date: "05/12/2023",
      title: "Reunión de Sectores Empresariales de Acapulco",
      description:
        "Agradecemos la invitación a CANACINTRA Acapulco para reunirnos con Carlos Slim, Rodrigo Alonso Herrera, Arturo Elías Ayub y otros empresarios, quienes contribuirán a la restauración económica, social y cultural de Acapulco, escuchando las necesidades del sector empresarial local.",
    },
    {
      images: ["/eventos/totis.jpg", "/eventos/totis2.jpg","/eventos/totis3.jpg"],
      date: "25/11/2023",
      title: "Apoyo de CANACINTRA Uruapan Michoacán a Acapulco",
      description:
        "La delegación de CANACINTRA Uruapan Michoacán ha enviado víveres a Acapulco para apoyar a las familias locales. Agradezco a mi mesa directiva por su dedicación en la organización de estas donaciones y la logística involucrada.",
    },
    {
      images: ["/eventos/saludo.jpg", "/eventos/saludo2.jpg", "/eventos/saludo3.jpg"],
      date: "20/10/2023",
      title: "Saludo a Amigos en la Convención Nacional de CANACINTRA",
      description:
        "Un placer saludar a Waldo Carrasco, presidente de CANACINTRA Tabasco, y a Carla Morales, expresidenta, en la Convención Nacional de Delegaciones, Sectores y Ramas celebrada en Querétaro.",
    },
    {
      images: ["/eventos/apertura_programas_financiamiento.jpg"],
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
            images={evento.images}
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
