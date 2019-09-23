const authRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../models/users-models');
const generateToken = require('../middleware/generateToken.js');

module.exports = authRouter;

authRouter.post('/register', (req, res) => {
  let user = req.body;
  if (!user.username || !user.email || !user.password) {
    res.status(400).json({
      message: 'Please include username, email, and password when registering'
    });
  } else {
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    Users.addUser(user)
      .then(saved => {
        res.status(201).json({ message: 'User Registered Succesfully' });
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  }
});

authRouter.post('/login', (req, res) => {
  let user = req.body;
  Users.findUserByUsername(user.username).then(foundUser => {
    if (foundUser && bcrypt.compareSync(user.password, foundUser.password)) {
      // a jwt should be generated here
      //   const token = generateToken(user);
      res.status(200).json({
        message: `Welcome ${foundUser.username}!`,
        token: token
      });
    } else {
      res.status(401).json({ message: 'Wrong Username or Password' });
    }
  });
});
