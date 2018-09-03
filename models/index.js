const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const env = require('../config/db.config')
const sequelize = new Sequelize(
  env.database,
  env.username,
  env.password,
  {
    'host' : env.host,
    'port': env.port,
    'dialect' : env.dialect
  }
);

var db = {};

fs.readdirSync(__dirname).filter(function (file) {
  return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function (file) {
  var model = sequelize['import'](path.join(__dirname, file));
  db[model.name] = model;
});

sequelize.sync();

module.exports = {db, Sequelize, sequelize};