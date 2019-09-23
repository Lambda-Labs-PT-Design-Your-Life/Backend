const jwt = require('jsonwebtoken');

module.exports = authenticate;

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({
          message: `not verified error message ${err.message}`
        });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  }
  res.status(403).json({
    message: 'not authorized no authorization token provided in headers'
  });
};
