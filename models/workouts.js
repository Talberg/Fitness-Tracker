const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is Required"
    },
    type: {
        type: String,
        trim: true,
        required: "Type is Required"
    },
    duration: {
        type: Number,
        trim: true,
        required: "Duration is Required"
    },
    distance: {
        type: Number,
        trim: true,
    },
    weight: {
        type: Number,
        trim: true,
    },
    sets: {
        type: Number,
        trim: true,
    },
    reps: {
        type: Number,
        trim: true,
    },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
