const express = require('express')
const router = require('./routes');
const app = express()
const port = 3000

require('dotenv').config();

app.use(router);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})