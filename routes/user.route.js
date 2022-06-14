const express = require('express');
const router = express.Router();
const { list, getById, edit, remove } = require('../controllers/user.controller');

// get all users
router.get('/list', list);

// get by ID
router.get('/list/:userId', getById);

//edit
router.patch('/edit', edit);

//remove
router.delete('/remove', remove);

module.exports = router;
