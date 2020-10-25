const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  resistances: [
    {
      type: Schema.Types.ObjectId,
      ref: "Resistance"
    }
  ],
  cardio: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cardio"
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
