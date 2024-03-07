const getAutores = (req, res, next) => {
  const autores = [
    {
      id_autor: 1,
      nombre: "Antoine de Saint-Exupery",
    },
    {
      id_autor: 2,
      nombre: "J. R. R. Tolkien",
    },
    {
      id_autor: 3,
      nombre: "Paulo Coelho",
    },
  ];
  res.status(200).json(autores);
};

export default getAutores;
