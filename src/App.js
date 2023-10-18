import express from "express";
import db from "./config/DBConnect.js";
import livros from "./models/Livro.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", ()=>{
    console.log("Conexão com o banco feita com sucesso");
})

const app = express();

app.use(express.json());

//const livros = [
//    {id: 1, "titulo": "Harry Potter"},
//    {id: 2, "titulo": "O Hobbit"}
//]

app.get('/', (req, res) =>{
    res.status(200).send('Curso de node')
})

app.get('/livros', (req, res) => {
    livros.find((err, livros) => {
        res.status(200).json(livros)
    })
})

app.get('/livros/:id', (req, res)=>{
    let index = findById(req.params.id)
    res.json(livros[index]).send("Livro pesquisado")
    
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso')
})

app.put('/livros/:id', (req, res)=>{
    let index = findById(req.params.id)
    livros[index].titulo = req.body.titulo;
    res.json(livros).send("Livro atualizado")
    
})

app.delete('/livros/:id', (req, res)=>{
    let {id} = req.params;
    let index = findById(id)
    livros.splice(index, 1)
    res.send(`Livro com ${id} apagado com sucesso`)
    
})

function findById(id){
    return livros.findIndex(livro => livro.id == id);
}

export default app;