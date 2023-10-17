const http = require("http")
const port = 3000

const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na página de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Pag de editora',
    '/sobre': 'Sobre'
}

const server = http.createServer((requisicao, resposta) => {
    resposta.writeHead(200, {'Content-Type': "text/plain"});
    resposta.end(rotas[requisicao.url]);
});

server.listen(port, () =>{
    console.log(`Servidor escutando em http://localhost:${port}`);
})