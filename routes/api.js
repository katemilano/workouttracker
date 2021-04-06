const router = require("express").Router();
const Workout = require('../models/workout');

// Routes
  router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: '$exercises.duration'
          }
        }
      }
    ]).then(data => {
      res.json(data);
    });
  });

  router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: '$exercises.duration'
          }
        }
      }
    ])
    .sort({ _id: -1 })
    .limit(7)
    .then(data => {
      res.json(data);
    });
  });


  router.post('/api/workouts', (req, res) => {
    Workout.create({}).then(data => res.json(data));
  });

  router.get('/put', (req, res) => {
    Workout.findByIdAndUpdate(
      params.id, 
      { $push: { exercises: req.body } }, 
      { new: true, runValidators: true }
    ).then( data => res.json(data));
  });

  router.delete("/api/workouts", (req, res) => {
    Workout.findByIdAndDelete(req.body.id).then(data => res.json(data));
  });

  module.exports = router;
