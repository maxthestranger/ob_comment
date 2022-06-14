const jwt = require('jsonwebtoken');
const { jwtToken } = require('../config/vars');

const verifyJWT = (req, res, next) => {
    const authHeaders = req.headers['authorization']

    if(!authHeaders) return res.sendStatus(401)
    const token = authHeaders.split(' ')[1]
    jwt.verify(
        token,
        jwtToken.accessTokenSec,
        (err, decoded) => {
            if(err) return res.sendStatus(403)
            req.user = decoded.username
            next()
        }
    )
}

module.exports = verifyJWT;