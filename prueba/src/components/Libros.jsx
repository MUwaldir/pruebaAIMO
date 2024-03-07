import { useEffect, useState } from "react";

function Libros({ libros, autores }) {
  const [dataTotal, setDataTotal] = useState([]);
  const [filtroTitulo, setFiltroTitulo] = useState("");

  useEffect(() => {
    const filtroLibros = () => {
      let librosFiltrados = libros;
      if (filtroTitulo.trim() !== "") {
        librosFiltrados = libros.filter((libro) =>
          libro.titulo.toLowerCase().includes(filtroTitulo.toLowerCase())
        );
      }
      librosFiltrados = librosFiltrados.map((libro) => {
        const autor = autores.find((a) => a.id_autor === libro.id_autor);
        if (autor) {
          return {
            ...libro,
            autor: autor.nombre,
          };
        } else {
          return libro;
        }
      });
      setDataTotal(librosFiltrados);
    };

    filtroLibros();
  }, [filtroTitulo, libros, autores]);

  return (
    <div className=" pt-10">
      <div className="flex justify-between px-32">
        <h1 className="text-7xl text-red-500  text-start ">
          Best sellers all times
        </h1>
        <div className="flex flex-col mt-4">
          <input
            type="text"
            placeholder="Buscar por título"
            value={filtroTitulo}
            onChange={(e) => setFiltroTitulo(e.target.value)}
            className="mt-4 h-10 p-2 border border-gray-400 rounded "
          />
        </div>
      </div>
      <div className="px-32">
        {dataTotal &&
          dataTotal.map((libro) => (
            <div
              key={libro.id_autor}
              className="bg-white border-spacing-2 border-2 border-gray-300 py-6 my-4 rounded-lg shadow-xl "
            >
              <h2 className="pl-4 font-bold text-gray-700  ">{libro.titulo}</h2>
              <p className="pl-4 text-sm text-black font-semibold pt-2">
                {libro.autor}
              </p>
              <p className="pl-4 pt-1">{libro.descripcion}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Libros;
