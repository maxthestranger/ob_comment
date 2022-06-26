const express = require('express');
const router = express.Router();
const verifyJWT = require('../middlewares/verifyJWT');
const { create, getById, edit, remove } = require('../controllers/reply.controller');

// create
router.post('/create', verifyJWT, create);

//list
router.get('/list/:commentId', getById);

// edit
router.patch('/edit/:replyId', verifyJWT, edit);

//delete
router.delete('/remove/:replyId', verifyJWT, remove);

module.exports = router;
