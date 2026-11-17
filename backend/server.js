
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());



mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));



const Workout = mongoose.model("Workout", {
    title: String,
    duration: String,
    calories: String,
    difficulty: String
});


const Fitness = mongoose.model("Fitness", {
    name: String,
    workout: String,
    duration: Number,
    calories: Number
});



app.post("/workouts", async (req, res) => {
    try {
        const workout = new Workout(req.body);
        await workout.save();
        res.send("Workout Added");
    } catch (error) {
        res.status(500).send("Error adding workout");
    }
});



app.get("/workouts", async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.json(workouts);
    } catch (error) {
        res.status(500).send("Error viewing workouts");
    }
});



app.put("/workouts/:id", async (req, res) => {
    try {
        await Workout.findByIdAndUpdate(
            req.params.id,
            req.body,
            { runValidators: true }
        );
        res.send("Workout Updated");
    } catch (error) {
        res.status(500).send("Error updating workout");
    }
});



app.delete("/workouts/:id", async (req, res) => {
    try {
        await Workout.findByIdAndDelete(req.params.id);
        res.send("Workout Deleted");
    } catch (error) {
        res.status(500).send("Error deleting workout");
    }
});



app.post("/fitness", async (req, res) => {
    try {
        const fitness = new Fitness(req.body);
        await fitness.save();
        res.send("Fitness Record Saved");
    } catch (error) {
        res.status(500).send("Error saving fitness record");
    }
});



app.get("/fitness", async (req, res) => {
    try {
        const records = await Fitness.find();
        res.json(records);
    } catch (error) {
        res.status(500).send("Error viewing records");
    }
});



app.put("/fitness/:id", async (req, res) => {
    try {
        await Fitness.findByIdAndUpdate(
            req.params.id,
            req.body,
            { runValidators: true }
        );
        res.send("Fitness Record Updated");
    } catch (error) {
        res.status(500).send("Error updating record");
    }
});



app.delete("/fitness/:id", async (req, res) => {
    try {
        await Fitness.findByIdAndDelete(req.params.id);
        res.send("Fitness Record Deleted");
    } catch (error) {
        res.status(500).send("Error deleting record");
    }
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server Running on port " + PORT);
});
