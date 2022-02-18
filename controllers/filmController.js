/* Los controladores tienen la lógica de negocio */
const  ModelFilms = require('../models/films');

const createFilm = (req, res) => {
    //// 
     ModelFilms.create(req.body)
        .then((row)=>{
            res.status(201).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const findAllFilms = (req, res) => {
     ModelFilms.findAll()
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const findOneFilm = (req, res) => {
     ModelFilms.findOne(req.params.idFilm)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}
 
 
 

module.exports = {
    createFilm,
    findAllFilms,
    findOneFilm
}