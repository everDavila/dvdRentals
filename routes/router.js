const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actorController');
const filmController = require('../controllers/filmController');



router.post('/actors', (actorController.createActor));
router.get('/actors', (actorController.findAllActors));
router.get('/actors/:idActor', (actorController.findOneActor));
router.patch('/actors/:idActor', (actorController.updateOneActor));
router.delete('/actors/:idActor', (actorController.softDeleteOneActor));
router.delete('/actors/destroy/:idActor', (actorController.destroyOneActor));

//// Rutas para films
router.post('/films', (filmController.createFilm));
router.get('/films', (filmController.findAllFilms));
router.get('/films/:idFilm', (filmController.findOneFilm)); 

module.exports = router;