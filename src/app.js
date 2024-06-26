const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');


require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './views');

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/',(req, res) => {
  res.json("Team Sammard's Testing API Documentation");
});

app.use('/datapacket', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
