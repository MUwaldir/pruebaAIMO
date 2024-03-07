import express from "express";
import routes from "./routes/prueba.routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", routes);
app.use("/", (req, res) => res.send("bienvenido al api prueba"));

export default app;
