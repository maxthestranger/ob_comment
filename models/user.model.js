const { DataTypes } = require('sequelize');
const { sequalize } = require('../config/mysql');

const User = sequalize.define('User', {
  id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatarUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
