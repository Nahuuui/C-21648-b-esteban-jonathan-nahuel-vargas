const cors = require('cors') 
const morgan = require('morgan')
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');
const Post = require('./models/post');

require('dotenv').config({path:'./.env'})
const PORT = process.env.PORT;

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())
app.use(morgan(`dev`))

// EJS
app.set('view engine', 'ejs');

// Rutas
app.use('/', require('./routes/posts'));

// Puerto y sincronización de la base de datos


db.sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
  })
  .catch((err) => console.error('Error al sincronizar la base de datos:', err));
