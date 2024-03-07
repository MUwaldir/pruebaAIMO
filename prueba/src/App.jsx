import { useEffect, useState } from "react";

import "./App.css";
import Libros from "./components/Libros";

function App() {
  const [libros, setLibros] = useState([]);
  const [autores, setAutores] = useState([]);

  const UrlApiLibros = "http://localhost:3001/api/books";
  const UrlApiAutores = "http://localhost:3001/api/authors";

  useEffect(() => {
    const getLibros = () => {
      fetch(UrlApiLibros)
        .then((response) => response.json())
        .then((data) => {
          setLibros(data);
        });
    };
    const getAutores = () => {
      fetch(UrlApiAutores)
        .then((response) => response.json())
        .then((data) => {
          setAutores(data);
          console.log(data);
        });
    };

    getLibros();
    getAutores();
  }, []);

  return (
    <>
      <Libros libros={libros} autores={autores} />
    </>
  );
}

export default App;
