const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const commentRoute = require('./comment.route');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    status: 'OK',
  });
});

router.use('/auth', authRoute);
router.use('/users', userRoute);
router.use('/comments', commentRoute);

module.exports = router;
