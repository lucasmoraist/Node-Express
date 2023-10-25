const { Router } = require('express')
const MatriculaController = require('../controllers/MatriculaController.js')

const router = Router()

router
    .get('/matriculas', MatriculaController.findAll)
    .get('/matriculas/:id', MatriculaController.findById)
    .post('/matriculas', MatriculaController.create)
    .put('/matriculas/:id', MatriculaController.update)
    .delete('/matriculas/:id', MatriculaController.delete)

module.exports = router