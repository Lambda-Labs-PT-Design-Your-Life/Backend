const jwt = require('jsonwebtoken');

module.exports = generateToken;

function generateToken(user) {
  const payload = {
    user: user,
    sub: user.id,
    username: user.username,
    email: user.email
  };

  const options = {
    expiresIn: '1d'
  };
  return jwt.sign(payload, process.env.JWT_SECRET, options);
}
