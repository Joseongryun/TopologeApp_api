const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

function configApp() {
  app.use(bodyParser.json({
    type: 'application/json'
  }));
  app.use(bodyParser.urlencoded({
    extends: false
  }));
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'content-type, x-access-token');
    next();
  });

  app.use('/', routes);
  app.use('/upload', express.static('uploads'));
}

configApp();

app.listen(3001, function () {
  console.log('listening on *: 3001');
});