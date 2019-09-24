const reflectionRouter = require('express').Router();
const Reflection = require('../../models/reflection');

module.exports = reflectionRouter;

reflectionRouter.post('/', (req, res) => {
  const reflection = req.body;
  if (
    (!reflection.userId, !reflection.reflectionDate, !reflection.reflectionText)
  ) {
    res.status(400).json({
      message:
        'reflection must include userId, reflectionDate, and reflectionText'
    });
  } else {
    Reflection.addReflection(reflection)
      .then(reflection => {
        res.status(201).json({ createdReflection: reflection });
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      });
  }
});
