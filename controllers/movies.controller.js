const { where } = require("sequelize");
const Movie = require("../models/movies");

module.exports = class MovieController{
    //pegando todos os filmes
    static async movieAll(req, res){
        const movies = await Movie.findAll({raw: true});
        res.json({movies});
    }

    //criando um filme
    static async movieCreate(req, res){
        const movie = {
            filme: req.body.filme,
            genero: req.body.genero,
            ano: req.body.ano,
            descricao: req.body.descricao
        };

        await Movie.create(movie);
        res.json({message: "filme criado"});
    }

    //atualizanfo um filme
    static async movieUpdate(req, res){
        try{
            const id = req.params.id;
            const updated = await Movie.update(req.body, {where: {id}});
            if(updated[0] === 0){
               return res.json({message: "filme nao encontrado"});
            }
            return res.json({message: "filme atualizado"});
        }catch(err){
            console.log(err)
        }
    }

    //deletando filmes
    static async movieDelete(req, res){
        try{
            const id = req.params.id;
            const deleted = await Movie.destroy({where: {id}});
            if(deleted === 0){
                return res.json({message: "filme nao encontrado"});
            }
            return res.json({message: "filme deletado"});
        }catch(err){
            console.log(err);
        }
    }
}