const express = require("express");
const cors = require("cors");

const app = express();

// config
app.set('port', process.env.PORT || 4000) // guarda variable llamada port, puerto del so/servicio o 4000

// middlewares
app.use(cors()) // se usa el middleware de cors (para hacer peticiones desde servidor distinto al del backend)
app.use(express.json())

//rutas
app.get('/', (req, res) => {
    res.send('Bienvenido a mi api restful')
})

//ruta api user
app.use('/api/users', require('./routes/user')) 

module.exports = app;