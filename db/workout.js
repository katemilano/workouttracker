const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: {
            type: String,
            allowNull: false
        },
        name: {
            type: String,
            allowNull: false
        },
        duration: {
            type: Number,
            allowNull: false
        },
        weight: {
            type: Number,
            allowNull: true
        },
        reps: {
            type: Number,
            allowNull: true
        },
        sets: {
            type: Number,
            allowNull: true
        }
      }
    ]
});

const WorkoutSchema = mongoose.model("Workout", WorkoutSchema);

module.exports = WorkoutSchema