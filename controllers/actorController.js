/* Los controladores tienen la lógica de negocio */
const  ModelActors = require('../models/actors');

const createActor = (req, res) => {
    //// 
     ModelActors.create(req.body)
        .then((row)=>{
            res.status(201).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const findAllActors = (req, res) => {
     ModelActors.findAll()
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const findOneActor = (req, res) => {
     ModelActors.findOne(req.params.idActor)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const updateOneActor = (req, res) => {
     ModelActors.update(req.params.idActor, req.body)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const destroyOneActor = (req, res) => {
     ModelActors.destroy(req.params.idActor)
        .then(()=>{
            res.status(204).send();
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const softDeleteOneActor = (req, res) => {
     ModelActors.softDelete(req.params.idActor)
        .then(()=>{
            res.status(204).send();
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

module.exports = {
    createActor,
    findAllActors,
    findOneActor,
    updateOneActor,
    destroyOneActor,
    softDeleteOneActor
}