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

reflectionRouter.get(':/reflectionId', (req, res) => {
  const { reflectionId } = req.params;

  Reflection.findReflectionByReflectionId(reflectionId)
    .then(reflection => {
      if (!reflection) {
        res
          .status(404)
          .json({ message: 'No reflection found by that Id in the database' });
      } else {
        res.status(200).json(reflection);
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

reflectionRouter.get('/user/:userId', (req, res) => {
  const { userId } = req.params;

  Reflection.findAllReflectionsByUser(userId)
    .then(foundReflections => {
      if (!foundReflections) {
        res
          .status(404)
          .json({ message: 'No reflections created by that user' });
      } else {
        res.status(200).json(foundReflections);
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

reflectionRouter.delete(':/reflectionId', (req, res) => {
  const { reflectionId } = req.params;

  Reflection.deleteReflection(reflectionId)
    .then(deletedReflection => {
      if (!deletedReflection) {
        res.status(404).json({ message: 'No reflection by the reflectionId' });
      } else {
        res.status(200).json({ message: 'reflection deleted' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

reflectionRouter.put('/:reflectionId', (req, res) => {
  const { reflectionId } = req.params;
  const { reflection } = req.body;

  Reflection.updateReflection(reflectionId, reflection)
    .then(updatedReflection => {
      if (!updatedReflection) {
        res
          .status(404)
          .json({ message: 'No reflection found by that reflectionId' });
      } else {
        res.status(200).json({ message: 'reflection updated' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

reflectionRouter.get('/reflections', (req, res) => {
  Reflection.finddAllReflections()
    .then(reflections => {
      if (!reflections) {
        res.status(404).json({ message: 'No reflections' });
      } else {
        res.status(200).json(reflections);
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});
