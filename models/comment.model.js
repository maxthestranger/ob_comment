const { DataTypes } = require('sequelize');
const { User } = require('./user.model')
const { sequalize } = require('../config/mysql');

const Comment = sequalize.define('Comment', {
    details: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

User.hasMany(Comment)
Comment.belongsTo(User)

module.exports = Comment;
