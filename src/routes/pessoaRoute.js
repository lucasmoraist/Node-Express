const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController.js')

const router = Router()

router
    .get('/pessoas', PessoaController.findAll)
    .get('/pessoas/:id', PessoaController.findById)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.findByIdMatricula)
    .post('/pessoas/:estudanteId/matricula', PessoaController.createMatricula)
    .post('/pessoas', PessoaController.create)
    .put('/pessoas/:id', PessoaController.update)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.updateMatricula)
    .delete('/pessoas/:id', PessoaController.delete)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deleteMatricula)

module.exports = router