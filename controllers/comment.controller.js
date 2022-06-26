const Comment = require("../models/comment.model");
const User = require("../models/user.model");

exports.create = async (req, res) => {
    const { userId, details } = req.body;
    try{
        const comment = await Comment.create({
            details,
            UserId: userId
        });

        res.send({
            comment
        })
    }catch (e) {
        console.log(e)
    }
}

// list all comments
exports.list = async (req, res) => {
    try{
        const comment = await Comment.findAll({
            include: User
        })
        res.send({
            comment
        })
    }catch(e){
        console.log(e)
    }
}

// comment by ID
exports.getById = async (req, res) => {
    const { commentId } = req.params;
    try{
        const comment = await Comment.findOne({ include: User, where: { id: commentId } })
        res.send({
            id: comment.id,
            details: comment.details,
            createdAt: comment.createdAt,
            User: {
                id: comment.User.id,
                username: comment.User.username,
                avatarUrl: comment.User.avatarUrl
            }
        })
    }catch(e){
        console.log(e)
    }
}

// edit comment
exports.edit = (req, res) => {
    const { details } = req.body;

    try{
        Comment.update({
            details
        }, {
            where: {
                id: req.params['commentId']
            }
        }).then(data => {
            res.send({
                comment: data,
                message: 'Comment updated successfully'
            })
        })
    }catch (e) {
        console.log(e)
    }

}
// delete a comment

exports.remove = (req, res) => {
    const { commentId } = req.params;
    try{
        Comment.destroy({
            where: {
                id: commentId
            }
        }).then(data => {
            res.send({
                message: `${data} comment deleted successfully`
            })
        })

    }catch (e) {
        console.log(e)
    }
}

