const express = require('express')
const app = express()

const controladores = require('./contoladores/controladores');



app.get('/', controladores.index);



app.listen(3000, () => console.log('Ejemplo corriendo en puerto 3000'))