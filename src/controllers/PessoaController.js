const bd = require('../models')

class PessoaController {

    static async findAll(req, res) {
        try {
            const pessoas = await bd.Pessoas.findAll();
            return res.status(200).json(pessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

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

    static async findById(req, res) {
        const { id } = req.params

        try {
            const pessoa = await bd.Pessoas.findOne({
                where: {
                    id: Number(id)
                }// Posso utilizar do where também detro do findAll
            })
            return res.status(200).json(pessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async create(req, res) {
        try {
            const criaPessoa = await bd.Pessoas.create(req.body)
            return res.status(200).json(criaPessoa)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async update(req, res) {
        const { id } = req.params
        const infos = req.body

        try{
            await bd.Pessoas.update(infos, { where: { id: Number(id) } } )
            const pessoaAtualizada = await bd.Pessoas.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async delete(req, res) {
        const { id } = req.params

        try{
            await bd.Pessoas.destroy({
                where: { id: Number(id) }
            })

            return res.status(200).send('Excluido com sucesso')
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = PessoaController;