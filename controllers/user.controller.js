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
    const {avatarUrl} = req.body;

    try{
        User.update({
            avatarUrl
        }, {
            where: {
                id: req.params['userId']
            }
        }).then(data => {
            res.send({
                user: data,
                message: 'User updated successfully'
            })
        })
    }catch (e) {
        console.log(e)
    }

}

exports.remove = (req, res) => {
    const { userId } = req.params;
    try{
        User.destroy({
            where: {
                id: userId
            }
        }).then(data => {
            res.send({
                message: `${data} user deleted successfully`
            })
        })

    }catch (e) {
        console.log(e)
    }
}

