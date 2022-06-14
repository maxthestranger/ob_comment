const User = require('../models/user.model');

exports.list = async (req, res) => {
    try{
        const users = await User.findAll()
        res.send({
            users
        })
    }catch(e){
        console.log(e)
    }
}

exports.getById = async (req, res) => {
    const { userId } = req.params;
    try{
        const user = await User.findOne({ where: { id: userId } })
        res.send({
            user
        })
    }catch(e){
        console.log(e)
    }
}

exports.edit = (req, res) => {
    const { userId, user } = req.body;
    res.send({
        userId,
        user
    })
}

exports.remove = (req, res) => {
    res.send({
        message: 'deleted successfully'
    })
}

