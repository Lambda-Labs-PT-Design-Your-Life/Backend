const authRouter = require('express').Router();

module.exports = authRouter;

authRouter.post('/register', (req, res) => {
  let user = req.body;
  !user.username || !user.email || !user.password
    ? res.status(400).json({ message: 'Please include us' })
    : res.status(200).json({ messatge: 'Post Successful' });
});
