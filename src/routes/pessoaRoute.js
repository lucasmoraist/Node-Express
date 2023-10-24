const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController.js')

const router = Router()

router
    .get('/pessoas', PessoaController.findAll)
    .get('/pessoas/:id', PessoaController.findById )

module.exports = router