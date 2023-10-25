const bd = require('../models')

class NivelController {

    static async findAll(req, res){
        try{
            const niveis = await bd.Niveis.findAll()
            return res.status(200).json(niveis)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async findById(req, res){
        const { id } = req.params

        try{
            const niveis = await bd.Niveis.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(niveis)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async create(req, res){
        try{
            const niveis = await bd.Niveis.create(req.body)
            return res.status(200).json(niveis)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async update(req, res){
        const { id } = req.params
        const infos = req.body

        try{
            // aqui ele irá apenas atualizar e não mostraria nada
            await bd.Niveis.update(infos, { where: { id: Number(id) } })
            // aqui está pegando o mesmo id para que retorne e mostre a alteração
            const niveis = await bd.Niveis.findOne({ where: { id: Number(id) } })
            return res.status(200).json(niveis)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async delete(req, res){
        const { id } = req.params

        try{
            await bd.Niveis.destroy({
                where: { id: Number(id) }
            })
            return res.status(200).json('Excluido com sucesso')
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = NivelController;