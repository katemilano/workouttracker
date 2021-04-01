const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
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
        },
        distance: {
            type: Number,
            allowNull: true
        }
      }
    ]
});

const WorkoutSchema = mongoose.model("Workout", WorkoutSchema);

module.exports = WorkoutSchema