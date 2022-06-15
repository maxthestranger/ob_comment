const express = require('express');
const router = express.Router();
const { register, login, refreshToken, logout} = require('../controllers/auth.controller');

// register
router.post('/register', register);

// login
router.post('/login', login);

// refresh token
router.get('/refresh', refreshToken);

// logout
router.get('/logout', logout);

module.exports = router;
