const authRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../models/users-models');

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
