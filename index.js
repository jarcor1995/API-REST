const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoute = require('./routes/post1');
const app = express();
app.use(bodyParser.json());

// Conexión a la base de datos
mongoose.connect('mongodb+srv://amayajuan984:Juan211443@cluster0.easfan6.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión a MongoDB exitosa.');
});


app.use('/post1', postRoute);

// Puerto
const port = process.env.PORT || 1000;
app.listen(port, () => {
  console.log('prueba Servidor escuchando en el puerto ' + port);
});