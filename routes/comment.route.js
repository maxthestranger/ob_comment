const express = require('express');
const router = express.Router();
const verifyJWT = require('../middlewares/verifyJWT');
const { create, edit, remove, list, getById } = require('../controllers/comment.controller');

// create
router.post('/create', verifyJWT, create);

//list
router.get('/list', list);

//get by ID
router.get('/list/:commentId', getById);

// edit
router.patch('/edit/:commentId', verifyJWT, edit);

//delete
router.delete('/remove/:commentId', verifyJWT, remove);

module.exports = router;
