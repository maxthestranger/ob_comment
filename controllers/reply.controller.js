const Reply = require("../models/reply.model");
const User = require("../models/user.model");

exports.create = async (req, res) => {
    const { userId, commentId, details } = req.body;
    try{
        const reply = await Reply.create({
            details,
            UserId: userId,
            CommentId: commentId
        });

        res.send({
            reply
        })
    }catch (e) {
        console.log(e)
    }
}

exports.getById = async (req, res) => {
    const { commentId } = req.params;

    try{
        const reply = await Reply.findAll({ include: User, where: { CommentId: commentId } })

        res.send({
            reply
        })
    }catch (e) {
        console.log(e)
    }
}

// edit reply
exports.edit = (req, res) => {
    const { details } = req.body;

    try{
        Reply.update({
            details
        }, {
            where: {
                id: req.params['replyId']
            }
        }).then(data => {
            res.send({
                comment: data,
                message: 'Reply updated successfully'
            })
        })
    }catch (e) {
        console.log(e)
    }

}

// delete a reply
exports.remove = (req, res) => {
    const { replyId } = req.params;
    try{
        Reply.destroy({
            where: {
                id: replyId
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

