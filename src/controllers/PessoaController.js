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

    static async findById(req, res) {
        const { id } = req.params

        try {
            const pessoa = await bd.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(pessoa)
        } catch (err) {
            return res.status(500).json(error.message)
        }
    }

    static async create(req, res) {

    }

    static async update(req, res) {

    }

    static delete(req, res) {

    }

}

module.exports = PessoaController;