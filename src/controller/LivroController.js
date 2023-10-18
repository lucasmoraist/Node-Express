import livros from "../models/Livro.js";


class LivroController {

    static listarLivros = (req, res) => {

        livros.find()
            .populate('autor')
            .exec((err, livros) => {
                if(err){
                    res.status(500).send({message: `${err.message} - falha ao buscar livros`})
                }else{
                    res.status(200).json(livros)
                }
            })
    }

    static listaLivro = (req, res) => {
        const id = req.params.id;

        livros.findById(id) 
            .populate('autor', 'nome')
            .exec((err, livros)=>{
                if(err){
                    res.status(400).send({message: `${err.message} - id não existe`})
                    console.log(err);
                }else{
                    res.status(200).send(livros);
                }
            })
    }

    static cadastrarLivro = ((req, res) => {

        let livro = new livros(req.body);

        livro.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro`})
                console.log(err);
            }else{
                res.status(201).send(livro.toJSON())
            }
        });

    })

    static atualizaLivro = ((req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(!err){
                res.status(200).send({message: 'Livro atualizado com sucesso'})
            } else {
                res.status(500).send({message: `${err.message} - erro ao atulizar`})
            }
        })
    })

    static excluirLivro = ((req, res)=>{
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send('Livro excluido com sucesso')
            } else {
                res.status(400).send({message: `${err.message} - id não existe`})
            }
        })
    })

    
}

export default LivroController;


