
//////////////////////////////////////////// SEGUNDO ARCHIVO CREADO ////////////////////////////////////////////////////////////////////////

'use strict'

var app = require('./app');
var port = 3700;
////////////////////////////////////////////concexion a base de datos//////////////////////////////// 
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localHost:27017/portafolio')
    .then(() => {

        console.log(" conexion a base de datos establecida correctamente ")
        //creacion del servidor
        app.listen(port, () => {

            console.log('servidor corriendo perfectamente en la url localhost 3700');

        });
    })
    .catch(err => console.log(err));

//////////////////////////////////////////////////////////////////////////////////////////////////