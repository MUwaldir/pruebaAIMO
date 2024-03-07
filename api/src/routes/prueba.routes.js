import { Router } from "express";
import getLibros from "../controllers/getbooks.controller.js";
import getAutores from "../controllers/getauthors.controller.js";
const routes = Router();

routes.get("/books", getLibros);
routes.get("/authors", getAutores);

export default routes;
