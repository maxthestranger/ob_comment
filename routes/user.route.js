const express = require('express');
const verifyJWT = require('../middlewares/verifyJWT');
const router = express.Router();
const { list, getById, edit, remove } = require('../controllers/user.controller');

// get all users
router.get('/list', list);

// get by ID
router.get('/list/:userId', getById);

//edit
router.patch('/edit/:userId', verifyJWT, edit);

//remove
router.delete('/remove/:userId', verifyJWT, remove);

module.exports = router;
