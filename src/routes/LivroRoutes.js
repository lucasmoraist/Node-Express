import express from "express";
import LivroController from "../controller/LivroController.js";

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca", LivroController.listaPorEditora)
    .get("/livros/:id", LivroController.listaLivro)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizaLivro)
    .delete("/livros/:id", LivroController.excluirLivro)

export default router;