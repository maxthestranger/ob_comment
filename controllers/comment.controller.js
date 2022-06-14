exports.create = (req, res) => {
    const { userId, comment } = req.body;
    res.send({
        userId,
        comment
    })
}

exports.list = (req, res) => {
    res.send({
        message: 'list of comments...'
    })
}

exports.getById = (req, res) => {
    const { commentId } = req.params;
    res.send({
        commentId
    })
}

exports.edit = (req, res) => {
    const { userId, comment } = req.body;
    res.send({
        userId,
        comment
    })
}

exports.remove = (req, res) => {
    res.send({
        message: 'deleted successfully'
    })
}

