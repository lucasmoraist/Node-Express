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
npx sequelize-cli model:create --name <nomeDaClasse> --attributes <atributosDaClasse>
```

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