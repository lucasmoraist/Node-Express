const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController.js')

const router = Router()

router
    .get('/pessoas', PessoaController.findAll)
    .get('/pessoas/:id', PessoaController.findById)
    .post('/pessoas', PessoaController.create)

module.exports = router