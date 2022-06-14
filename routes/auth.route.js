const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth.controller');

// register
router.post('/register', register);

// login
router.post('/login', login);

module.exports = router;
