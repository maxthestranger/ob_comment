const { DataTypes } = require('sequelize');
const { sequalize } = require('../config/mysql');

const User = sequalize.define('User', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
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
  }
}, {
  indexes: [
    {
      unique: true,
      fields: ['username']
    }
  ]
});

module.exports = User;
