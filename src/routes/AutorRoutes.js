import express from "express";
import autorController from "../controller/AutorController.js";

const router = express.Router();

router
    .get("/autores", autorController.listarAutores)
    .get("/autores/:id", autorController.listaAutor)
    .post("/autores", autorController.cadastrarAutor)
    .put("/autores/:id", autorController.atualizaAutor)
    .delete("/autores/:id", autorController.excluirAutor)

export default router;