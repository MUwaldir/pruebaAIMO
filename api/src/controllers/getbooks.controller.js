const getLibros = (req, res, next) => {
  const libros = [
    {
      titulo: "THE LITTLE PRINCE",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, rerum! Tempore, facere! Cum, est repellendus. Inventore dignissimos voluptas necessitatibus commodi laudantium eaque iste ipsam ipsa, doloremque quisquam illo. Aperiam, obcaecati? THE LITTLE PRINCE",
      id_autor: 1,
    },
    {
      titulo: "THE LORD OF THE RINGS",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, rerum! Tempore, facere! Cum, est repellendus. Inventore dignissimos voluptas necessitatibus commodi laudantium eaque iste ipsam ipsa, doloremque quisquam illo. Aperiam, obcaecati? THE LORD OF THE RINGS",
      id_autor: 2,
    },
    {
      titulo: "THE ALCHEMIST",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, rerum! Tempore, facere! Cum, est repellendus. Inventore dignissimos voluptas necessitatibus commodi laudantium eaque iste ipsam ipsa, doloremque quisquam illo. Aperiam, obcaecati? THE ALCHEMIST",
      id_autor: 3,
    },
  ];
  res.status(200).json(libros);
};

export default getLibros;
