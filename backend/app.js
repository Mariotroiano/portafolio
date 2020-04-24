
///////////////////////////////////////  PRIMER ARCHIVO CREADO ///////////////////////////////////////////////////


'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar archivos de ruta 
var project_route = require('./routes/project');

//middlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



//ruotes
app.use('/api', project_route);


//exports

module.exports = app;









/*app.get('/', (req, resp) => {
    resp.status(200).send(
       '<h1>Pagina de inicio</h1> '

    );

});



app.get('/test', (req, resp) => {
    resp.status(200).send({
        message: 'mensaje desde mi api de node js '

    });

}); */
