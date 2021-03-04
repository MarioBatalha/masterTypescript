import { Router } from "express";
import useController from "./controllers/UserController";

const routes = Router();

routes.get("/users", useController.index);
routes.post("/users", useController.create);

export default routes;
