import React, { useState, useEffect } from "react";
const images = [
  "/socios/hielos1.jpg",
  "/socios/hielos2.jpg",
  "/socios/hielos3.jpg",
  "/socios/hielos4.jpg",
  "/socios/hielos5.jpg",
  // Añade más imágenes según sea necesario
];
const Partner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="border rounded-xl w-[300px] shadow-xl">
        <div className="relative">
          <div className="overflow-hidden rounded-t-xl relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index}`}
                  className="h-[250px] w-[300px] flex-shrink-0 object-cover"
                />
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute opacity-50 hover:opacity-100 top-1/2 left-4 transform -translate-y-1/2 text-white p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="h-6 w-6 "
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
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

        <p className="p-2 text-center text-xl text-tertiary font-semibold">
          Hielos y climas S.A. de C.V.
        </p>
      </div>
    </div>
  );
};
export default Partner;
