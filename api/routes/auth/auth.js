const authRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../../models/users');
const generateToken = require('../../../middleware/generateToken.js');
const jwt = require('jsonwebtoken');

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
        if (saved) {
          res.status(201).json(saved.userId);
        } else {
          res.status(400).json({ somethingWrongWithSavingUser: saved });
        }
      })
      .catch(error => {
        res.status(500).json({ message: 'something went wrong' });
      });
  }
});

authRouter.post('/login', (req, res) => {
  let user = req.body;
  Users.findUserByUsername(user.username).then(foundUser => {
    if (foundUser && bcrypt.compareSync(user.password, foundUser.password)) {
      // a jwt should be generated here based off of the user found in the database
      const token = generateToken(foundUser);
      const decodedToken = jwt.decode(token);
      res.status(200).json({
        token: token,
        userID: decodedToken.sub
      });
    } else {
      res.status(401).json({ message: 'Wrong Username or Password' });
    }
  });
});
