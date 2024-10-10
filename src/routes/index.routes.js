import { Router } from "express";
import suspeitosRoutes from "./suspeitos.routes.js"

const routes = Router ();

//rota raiz para teste
routes.get("/", (req, res) => { //request, response
    return res.status(200).json({ message: "Servidor ta funfando amores!"})
});

routes.use("/suspeitos", suspeitosRoutes);
export default routes;