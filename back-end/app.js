// Preparando express e importando middlewares
const express = require('express');
const dotenv = require("dotenv");

dotenv.config();

//archivo de la configuracion de bd 
require('./utils/db.js');
const app = express(); //crear instancia app

const port = process.env.SERVER_PORT ?? 3030;

// Opciones de CORS
const corsOptions = {
    credentiasl: true,
    optionSuccessStatus:200,
    methods: "GET, PUT, POST, DELETE",
    origin: '*'
};


app.use(express.json({limit: '500MB'}));
app.use(express.urlencoded({extended:true}));


//ENDPOINTs
const routerCliente = require('./routes/routerCliente.js');

app.use('/cliente', routerCliente);

app.listen(port, function () {
    console.log("Server listening at: " + port);
  });