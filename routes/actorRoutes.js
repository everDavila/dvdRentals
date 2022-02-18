const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actorController');

//Si la ruta es actors ejecute actorController y la función createHome

router.post('/actors', (actorController.createActor));
router.get('/actors', (actorController.findAllActors));
router.get('/actors/:idActor', (actorController.findOneActor));
router.patch('/actors/:idActor', (actorController.updateOneActor));
router.delete('/actors/:idActor', (actorController.softDeleteOneActor));
router.delete('/actors/destroy/:idActor', (actorController.destroyOneActor));


module.exports = router;