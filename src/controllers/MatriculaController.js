const bd = require('../models')

class MatriculaController {

    static async findAll(req, res) {
        try {
            const matriculas = await bd.Matriculas.findAll();
            return res.status(200).json(matriculas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async findById(req, res) {
        const { id } = req.params

        try {
            const matricula = await bd.Matriculas.findOne({
                where: {
                    id: Number(id)
                }// Posso utilizar do where também detro do findAll
            })
            return res.status(200).json(matricula)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async create(req, res) {
        try {
            const criaMatricula = await bd.Matriculas.create(req.body)
            return res.status(200).json(criaMatricula)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async update(req, res) {
        const { id } = req.params
        const infos = req.body

        try{
            await bd.Matriculas.update(infos, { where: { id: Number(id) } } )
            const matriculaAtualizada = await bd.Matriculas.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(matriculaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async delete(req, res) {
        const { id } = req.params

        try{
            await bd.Matriculas.destroy({
                where: { id: Number(id) }
            })

            return res.status(200).send('Excluido com sucesso')
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = MatriculaController;