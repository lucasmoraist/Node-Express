const { Router } = require('express')
const MatriculaController = require('../controllers/MatrciulaController.js')

const router = Router()

router
    .get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.findByIdMatricula)
    .post('/pessoas/:estudanteId/matricula', MatriculaController.createMatricula)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.updateMatricula)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.deleteMatricula)

module.exports = router