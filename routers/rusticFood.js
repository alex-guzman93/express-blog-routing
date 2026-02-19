// richiamo istanza di framework Express
const express = require('express')
// creiamo un istanza dell'oggetto rotte di Express
const router = express.Router();

// importo i dati dei cibi rustici
const menuRusticFood = require('./../data/posts');

// Rotte di CRUD
// index
router.get('/', function (req, res) {
    //res.send('Lista dei cibi rustici');
    
    // Restituisco dati in json
    res.json({
        NumberMenu: menuRusticFood.length,
        listMenuRusticFood: menuRusticFood
    });

});

// show
router.get('/:id', function (req, res) {
    res.send('Dettagli dei cibi rustici ' + req.params.id);
});

// store
router.post('/', function (req, res) {
    res.send('Creazione nuovo cibo rustico');
});

// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale dei cibi rustici ' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale dei cibi rustici ' + req.params.id);
});

// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del cibo rustico ' + req.params.id);
});

// Esporto l'istanza delle rotte
module.exports = router;