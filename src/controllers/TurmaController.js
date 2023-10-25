const bd = require('../models')

class TurmaController {

    static async findAll(req, res) {
        try{
            const turmas = await bd.Turmas.findAll()
            return res.status(200).json(turmas)
        }catch(e){
            return res.status(500).send(e.message)
        }
    }

    static async findById(req, res) {
        const { id } = req.params

        try {
            const turma = await bd.Turmas.findOne({
                where: {
                    id: Number(id)
                }// Posso utilizar do where também detro do findAll
            })
            return res.status(200).json(turma)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async create(req, res) {
        try {
            const criaTurma = await bd.Turmas.create(req.body)
            return res.status(200).json(criaTurma)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async update(req, res) {
        const { id } = req.params
        const infos = req.body

        try{
            await bd.Turmas.update(infos, { where: { id: Number(id) } } )
            const turmaAtualizada = await bd.Turmas.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(turmaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async delete(req, res) {
        const { id } = req.params

        try{
            await bd.Turmas.destroy({
                where: { id: Number(id) }
            })

            return res.status(200).send('Excluido com sucesso')
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = TurmaController