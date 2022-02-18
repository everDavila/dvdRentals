require('dotenv').config();
const express = require("express");
//Importar las rutas de vista 
const actorRoutes = require('./routes/actorRoutes');
const app=  express();
/*Middlewares */
app.use(express.urlencoded({extended: true}));
app.use(express.json())

/* Rutas */
app.use('/api/v2', actorRoutes);

/**Poner el servidor a escuchar */
app.listen(4000,()=> {
    console.log('Server on: 4000')
})


 