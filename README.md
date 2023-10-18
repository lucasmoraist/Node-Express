# Node-Express
Aprendendo criar Api Node Express
- Utilizando Banco de Dados NoSQL, MongoDB

# Iniciando Projeto

- O "y" é para dar Yes para todas as perguntas que serão feitas após iniciar a criação do projeto
```
npm init -y
```

## Gera esqueleto do projeto
```
npm install express-generator -g
```

```
express <nome do projeto>
```

# Dependencias

## Nodemon
- Versão utilizada: 2.0.15
- "-D" indica que é uma dependência de desenvolvimento
### Descrição
nodemon é uma ferramenta que ajuda reiniciando automaticamente o aplicativo quando são detectadas alterações no arquivo no diretório.

### Comando para instalação
```
npm install nodemon@2.0.15 -D
```

## Express
- Versão utilizada: 4.17.3

### Comando para instalação
```
npm install express@4.17.3
```

## Mongoose
- Versão utilizada: 6.2.6

### Descrição
Mongoose é uma ferramenta de modelagem de objetos MongoDB projetada para funcionar em um ambiente assíncrono.

### Comando para instalação
```
npm i mongoose@6.2.6
``` 

# Endpoints
## Cadastrar Livro
`POST` /livros

| campo | tipo | obriatório | descição
| --- | :---: | :---: | ---
| id| string | sim | é o id do livro
| nome | text | sim | nome do livro
| autor | Object | sim | receberá o id da classe autor
| editora | String | sim | nome da editora do livro
| numeroPaginas | Number | sim | quantidade de páginas do livro

**Códigos de Respostas**
| código | descrição
| --- | ---
| 201 | livro cadastrada
| 400 | erro na validação de dados da requisição

## Listar livro por Editora
`GET` /livros/busca?editora=Marvel

```
{
	"_id": "653027f380e621023c3b5f82",
	"titulo": "Loki",
	"autor": "653019df4db62dd33fd02b5d",
	"editora": "Marvel",
	"numeroPaginas": 70,
	"__v": 0
}
```

**Códigos de Respostas**
| código | descrição
| --- | ---
| 200 | dados retornados no corpo da resposta
| 404 | não foi encontrado livro com editora informada

## Listar livro
`GET` /livros/{id}

```
{
	"_id": "652fee3221a80b646a83fe7a",
	"titulo": "Lógica de Programação 2",
	"autor": {
		"_id": "653019df4db62dd33fd02b5d",
		"nome": "Stan Lee"
	},
	"editora": "Casa do Código",
	"numeroPaginas": 150
},
```

**Códigos de Respostas**
| código | descrição
| --- | ---
| 200 | dados retornados no corpo da resposta
| 404 | não foi encontrado livro com id informado

## Cadastrar Autor

`POST` /autores

| campo | tipo | obriatório | descição
| --- | :---: | :---: | ---
| id| string | sim | é o id do autor
| nome | text | sim | nome do autor
| nacionalidade | text | sim | nacionalidade do autor

**Códigos de Respostas**
| código | descrição
| --- | ---
| 201 | autor cadastrada
| 400 | erro na validação de dados da requisição

## Listar autor
`GET` /autores/{id}

```
{
	"_id": "653019df4db62dd33fd02b5d",
	"nome": "Stan Lee",
	"nacionalidade": "americano"
},
```

**Códigos de Respostas**
| código | descrição
| --- | ---
| 200 | dados retornados no corpo da resposta
| 404 | não foi encontrado autor com id informado