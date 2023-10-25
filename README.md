# Node-Express

# Dependências

## body-parser
### Descrição
Middleware de análise de corpo Node.js.

Analise os corpos das solicitações recebidas em um middleware antes de seus manipuladores, disponíveis na req.bodypropriedade.

### Comando para instalação
```
npm i body-parser
```

## sequelize/sequelize-cli/path
- após instalação, rodar `npx sequelize-cli init` para criar arquitetura do projeto

### Comando para instalação
```
npm i sequelize sequelize-cli path
```

### Comando para criar models
- O `id` não é criado dentro da model, porém, é criado em migrations
- Dentro do sequelize nós criamos as reagras dos atributos, como: notNull, auto increment, PK e FK
```
npx sequelize-cli model:create --name <nomeDaClasse> --attributes <atributosDaClasse>:<tipagemDoAtributo>
```
#### Tipos dos atributos
- String
- Number
- Boolean
- Dateonly

### Retorno
```
Sequelize CLI [Node: 18.16.0, CLI: 6.6.1, ORM: 6.33.0]

New model was created at C:\Users\ADM\Desktop\Node-Express\src\models\pessoas.js .
New migration was created at C:\Users\ADM\Desktop\Node-Express\src\migrations\20231023114737-create-pessoas.js .
```

### Comando de migração do sequelize 
```
npx sequelize-cli db:migrate
```

### Comando para gerar Seed
```
npx sequelize-cli seed:generate --name <nomeDoArquivo>
```

### Comando para semear as tabelas do bd
```
npx sequelize-cli db:seed:all
```

# Endpoints
## Cadastrar Livro
`POST` /pessoas

| campo | tipo | obriatório | descição
| --- | :---: | :---: | ---
| id| Number | sim | é o id da pessoa
| nome | text | sim | nome da pessoa
| ativo | Boolean | sim | valor que irá dizer se é ativo ou não; 0 - Inativo/1 - Ativo
| email | text | sim | irá receber o email da pessoa
| role | text | sim | informação se é estudante ou docente

**Códigos de Respostas**
| código | descrição
| --- | ---
| 201 | pessoa cadastrada
| 400 | erro na validação de dados da requisição

**Códigos de Respostas**
| código | descrição
| --- | ---
| 200 | dados retornados no corpo da resposta
| 404 | não foi encontrado livro com editora informada

## Listar livro
`GET` /pessoas/{id}

```
{
	"id": 1,
	"nome": "Ana Souza",
	"ativo": true,
	"email": "ana@ana.com",
	"role": "estudante",
	"createdAt": "2023-10-23T13:21:31.000Z",
	"updatedAt": "2023-10-23T13:21:31.000Z"
}
```

**Códigos de Respostas**
| código | descrição
| --- | ---
| 200 | dados retornados no corpo da resposta
| 404 | não foi encontrado pessoa com id informado