import { Router } from "express";

// Lista de importação das rotas do projeto
import suspeitosRoutes from "../routes/suspeitos.routes.js";

const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(201).json({ message: "Servidor ta funfando amores!" });
});

// Lista de uso das rotas do projeto
routes.use("/suspeitos", suspeitosRoutes);

export default routes;