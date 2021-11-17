const router = require('express').Router();
const db = require('../models');

router.get("/api/workouts", (req, res) =>
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
        totalDistance: { $sum: "$exercises.distance" },
        totalSets: { $sum: "$exercises.sets" },
        totalReps: { $sum: "$exercises.reps" },
        totalWeight: { $sum: "$exercises.weight" },
      },
    },
  ])
    .then((workout) => res.json(workout))
    .catch((err) => res.status(400).json(err))
);

router.post("/api/workouts", (req, res) =>
  db.Workout.create({})
    .then((workout) => res.json(workout))
    .catch((err) => res.status(400).json(err))
);

module.exports = router;