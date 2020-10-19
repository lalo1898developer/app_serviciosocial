// Requerimos dotenv para manipular variables globales desde un archivo .env y mongoose para conexion a la BD de Mongo
require('dotenv').config();
const mongoose = require('mongoose');

// Importamos las constantes del archivo index que se encuentra en la carpeta ./api y ./mongo
const { api, PORT } = require('./api');
const { MONGO_URI } = require('./mongo');

// Conexion a la base de datos de Mongo
mongoose.connect(
    MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
  )
    .then(() => console.log('--------Base de Datos Mongo, Conectada----------------------------------------'))
    .catch((err) => console.log('Error en la conexion de la base de datos: ', err));

// Ponemos a escuchar al servidor en el puerto definido y mostramos en consola un mensaje para conocer esto
api.listen(PORT, () => console.log(`Escuchando en el puerto: ${PORT}`));
