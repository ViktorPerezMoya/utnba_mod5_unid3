var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send('Bienvenidos a mascotas perdidas!!');
});

router.get('/perdidos/listar', function(req,res){
    const pool = require('./bd');
    let mascotas = [];
    pool.query('SELECT * FROM mascotas;').then((resultados) => {
        mascotas = JSON.parse(JSON.stringify(resultados));        

        res.status(200).json({
            status: 'ok',
            mascotas
        });
    }).catch((error) => {
        console.log("ERROR:",error);
        res.status(500).json(error);
    });
});

module.exports = router;