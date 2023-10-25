const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController.js')

const router = Router()

router
    .get('/pessoas', PessoaController.findAll)
    .get('/pessoas/:id', PessoaController.findById)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.findByIdMatricula)
    .post('/pessoas', PessoaController.create)
    .put('/pessoas/:id', PessoaController.update)
    .delete('/pessoas/:id', PessoaController.delete)

module.exports = router