const bodyParser = require('body-parser')

const pessoas = require('./pessoaRoute.js')
const niveis = require('./nivelRoute.js')
const turmas = require('./turmaRoute.js')
const matriculas = require('./matriculaRoute.js')

module.exports = app => {
 app.use(
   bodyParser.json(),
   pessoas,
   niveis,
   turmas,
   matriculas
   )
 }