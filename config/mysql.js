const { Sequelize } = require('sequelize');
const { sql } = require('./vars');

const sequalize = new Sequelize(sql.database, sql.username, sql.password, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = { sequalize, Sequelize };
