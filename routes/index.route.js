const express = require('express');
const authRoute = require('./user.route');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    status: 'OK',
  });
});

router.use('/auth', authRoute);

module.exports = router;
