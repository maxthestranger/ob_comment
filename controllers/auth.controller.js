const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { trim, isEmpty, isNil, isNull } = require('lodash');
const { jwtToken } = require('../config/vars');
const User = require('../models/user.model');

// if empty
const ifEmpty = (...args) => {
  let res = false;
  args.forEach(arg => {
    if(isEmpty(trim(arg)) || isNil(trim(arg))){
      res = true
    }
  })

  return res
};

// hash password
const hashedPassword = (pass) => {
  return bcrypt.hashSync(pass, 10);
};

exports.register = async (req, res) => {
  const { username, password, avatarUrl } = req.body;

  // check if empty
  if (ifEmpty(username, password, avatarUrl)) {
    res.status(422).send({
      message: 'Values cannot be empty',
    });

    return
  }

  // check duplicate username
  const [user, created] = await User.findOrCreate({
    where: { username },
    defaults: {
      id: uuidv4(),
      password: await hashedPassword(password),
      avatarUrl
    },
  });

  // save user
  if (!created) {
    res.status(409).send({
      message: 'User already exists',
    });

    return;
  }

  res.status(200).send({
    message: 'User created successfully'
  });
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
    // generate accessToken
    const accessToken = jwt.sign(
      {
        username: user.username,
      },
      jwtToken.accessTokenSec,
      {
        expiresIn: '2m',
      }
    );

    //generate refreshToken
    const refreshToken = jwt.sign(
        {
          username: user.username,
        },
        jwtToken.accessTokenSec,
        {
          expiresIn: '1d',
        }
    );

    res.cookie('jwt', refreshToken, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000})
    res.status(200).send({
      user,
      accessToken,
    });

    return;
  }

  res.status(403).send({
    message: 'Invalid password',
  });
};
