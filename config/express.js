const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const router = require('../routes/index.route');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// cors
app.use(cors());

// secure https
app.use(helmet());

// compress res bodies
app.use(compression());

// logger
app.use(morgan('tiny'));

app.use('/', router);

// handle 404
app.use((req, res) => {});

module.exports = app;
