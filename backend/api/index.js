// Usamos la dependencias instaladas y las guardamos en una constante 
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Definimos una constante para utilizar las funciones de Express y definimos el puerto donde se levantara el servidor
const api = express();
const PORT = process.env.PORT || 3000;

// Definimos los siguientes middlewares para utilizar morgan y evitar que nos salgan los warnings en consola de Express
// Agregamos el middleware de cors para permitir peticiones (en nuestro caso no definiremos permisos de IP)
api.use(cors());
api.use(morgan('dev'));
api.use(express.urlencoded({ extended: true }));
api.use(express.json({ express: true }));

// Establecemos el endpoint para probar que el servidor responda y un mensaje para indentificar esta acción
api.get('/', (req, res) => res.send('El endpoint raiz, responde correctamente!'));

// Exportamos nuestras constantes de api y PORT para que se utilicen en el archivo principal
module.exports = { api, PORT };
