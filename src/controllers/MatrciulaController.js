const bd = require('../models')

class MatriculaController{
    
    static async findByIdMatricula(req, res){
        const { estudanteId, matriculaId } = req.params

        try {
            const matricula = await bd.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }// Posso utilizar do where também detro do findAll
            })
            return res.status(200).json(matricula)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createMatricula(req, res) {

        const { estudanteId } = req.params
        const matricula = { ...req.body, estudante_id: Number(estudanteId) }

        try {
            const criaPessoa = await bd.Pessoas.create(matricula)
            return res.status(200).json(criaPessoa)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const infos = req.body

        try{
            await bd.Matriculas.update(infos, { 
                where: { 
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                } } )

            const matriculaAtualizada = await bd.Matriculas.findOne( { where: { id: Number(matriculaId) } } )

            return res.status(200).json(matriculaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params

        try{
            await bd.Pessoas.destroy({
                where: { id: Number(matriculaId) }
            })

            return res.status(200).send('Excluido com sucesso')
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = MatriculaController;