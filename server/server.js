const express = require('express');
const path = require('path');

const client = require('./routes/client');

const app = express();

const morgan = require('morgan');
const favicon = require('serve-favicon');

app.use(morgan('dev'));

app.use('/', client);

app.use(express.static(path.join(__dirname, '../client')));
app.use(favicon(path.join(__dirname, '../client', 'assets', 'favicon.ico')));

app.use((req, res, next) => {
  const error = new Error('ERROR 404 can\'t find what you are looking for please try another URL!');
  error.status = 404;
  next(error);
});

app.use((err, req, res) => {
  console.error(err.stack);
  const status = err.status || 500;
  res.status(status).send(err.message);
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080!');
});