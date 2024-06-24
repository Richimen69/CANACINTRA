import { supabase } from "../lib/Client";
import { useState, useEffect } from "react";
const AddUs = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [telefono2, setTelefono2] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [delegacion, setDelegacion] = useState("");
  const [vigencia, setVigencia] = useState("");
  const [datos, setDatos] = useState("");
  const image_url = "";
  const [correo, setCorreo] = useState("");
  async function guardarUser() {
    const { data, error } = await supabase
      .from("socios")
      .insert([
        {
          nombre,
          telefono,
          empresa,
          delegacion,
          vigencia,
          image_url,
          telefono2,
          correo,
        },
      ]);
    setDatos(data);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    guardarUser();
    console.log(datos);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen dark">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">
          Registrar Socio
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            placeholder="Nombre"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            onChange={(e) => setNombre(e.target.value)}
            required
            name="nombre"
          />
          <input
            placeholder="Telefono"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="number"
            onChange={(e) => setTelefono(e.target.value)}
            required
            name="telefono"
          />
          <input
            placeholder="Telefono 2"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="number"
            onChange={(e) => setTelefono2(e.target.value)}
            required
            name="telefono2"
          />
          <input
            placeholder="Correo"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
            onChange={(e) => setCorreo(e.target.value)}
            required
            name="correo"
          />
          <input
            placeholder="Empresa"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            onChange={(e) => setEmpresa(e.target.value)}
            required
            name="empresa"
          />
          <input
            placeholder="Delegaciòn"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            onChange={(e) => setDelegacion(e.target.value)}
            required
            name="delegacion"
          />
          <input
            placeholder="Vigencia"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            onChange={(e) => setVigencia(e.target.value)}
            required
            name="vigencia"
          />
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddUs;
