var express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("../models");
const app = express();
var router = express.Router();

// Retrieve all from db
router.get("/api/workouts", function(request, response) {
    db.Workout.find({})
    .then(dbWorkout => {
        response.json(dbWorkout);
    })
    .catch(error => {
        console.log(error);
        response.json(error);
    });
});

// Export routes for server.js to use.
module.exports = router;