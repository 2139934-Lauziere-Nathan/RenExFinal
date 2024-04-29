const express = require('express');
const router = express.Router();    
const controller = require('../controlleur/controlleur');


//creation de la route pour tout afficher
router.get('/tous/:id', controller.getall);


module.exports = router;