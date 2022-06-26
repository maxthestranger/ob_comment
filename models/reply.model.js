const { DataTypes } = require('sequelize');
const User = require('./user.model')
const Comment = require('./comment.model')
const { sequalize } = require('../config/mysql');

const Reply = sequalize.define('Reply', {
    details: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

User.hasMany(Reply)
Comment.hasMany(Reply)
Reply.belongsTo(User)
Reply.belongsTo(Comment)

module.exports = Reply;
