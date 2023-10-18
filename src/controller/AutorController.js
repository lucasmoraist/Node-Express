import autores from "../models/Autor.js"

class autorController {

    static listarAutores = (req, res) => {

        autores.find((err, autores) => {
            
            if(err){
                res.status(500).send({message: `${err.message} - falha ao buscar autores`})
            }else{
                res.status(200).json(autores)
            }
        })

    }

    static listaAutor = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores)=>{
            if(err){
                res.status(400).send({message: `${err.message} - id não existe`})
                console.log(err);
            }else{
                res.status(200).send(autores);
            }
        })
    }

    static cadastrarAutor = ((req, res) => {

        let autor = new autores(req.body);

        autor.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar autor`})
                console.log(err);
            }else{
                res.status(201).send(autor.toJSON())
            }
        });

    })

    static atualizaAutor = ((req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(!err){
                res.status(200).send({message: 'Autor atualizado com sucesso'})
            } else {
                res.status(500).send({message: `${err.message} - erro ao atulizar`})
            }
        })
    })

    static excluirAutor = ((req, res)=>{
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send('Autor excluido com sucesso')
            } else {
                res.status(500).send({message: `${err.message} - id não existe`})
                console.log(err);
            }
        })
    })
}

export default autorController;


