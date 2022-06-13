const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { trim, isEmpty, isNull } = require('lodash');
const { jwtToken } = require('../config/vars');
const User = require('../models/user.model');

// if empty
const ifEmpty = (value) => {
  if (isEmpty(trim(value))) {
    return true;
  }

  return false;
};

// hash password
const hashedPassword = async (pass) => {
  return await bcrypt.hash(pass, 10);
};

exports.register = async (req, res) => {
  const { username, password, avatarUrl } = req.body;

  // check if empty
  if (ifEmpty(username) && ifEmpty(password) && ifEmpty(avatarUrl)) {
    res.status(422).send({
      message: 'Values cannot be empty',
    });

    return;
  }

  // check duplicate username
  const [user, created] = await User.findOrCreate({
    where: { username },
    default: {
      password: hashedPassword(password),
      avatarUrl,
    },
  });

  // save user
  if (!created) {
    res.status(409).send({
      message: 'User already exists',
    });

    return;
  }

  res.status(200).send(user);
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  // check if user exists
  const user = await User.findOne({
    where: { username },
  });

  if (isNull(user)) {
    res.status(404).send({
      message: 'User not found',
    });

    return;
  }

  // check if password matches
  if (bcrypt.compareSync(password, user.password)) {
    // generate accessToke
    const accessToken = jwt.sign(
      {
        username: user.username,
      },
      jwtToken.accessTokenSec,
      {
        expiresIn: '30s',
      }
    );

    res.status(200).send({
      user,
      accessToken,
    });

    return;
  }

  res.status(403).send({
    message: 'Invalid password',
  });

  return;
};
