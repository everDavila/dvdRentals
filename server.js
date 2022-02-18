require('dotenv').config();
const express = require("express");
//Importar las rutas de vista 
const generalRoutes = require('./routes/router');
//const actorRoutes = require('./routes/actorRoutes');
//const filmRoutes = require('./routes/filmRoutes');
const app=  express();
/*Middlewares */
app.use(express.urlencoded({extended: true}));
app.use(express.json())

/* Rutas */
//app.use('/api/v2', actorRoutes);
app.use('/api/v2', generalRoutes);

/**Poner el servidor a escuchar */
app.listen(4000,()=> {
    console.log('Server on: 4000')
})


 