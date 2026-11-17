
import React, { useState } from "react";

function WorkoutList(props) {

    const [workouts] = useState(props.workouts);

    return (
        <div>
            <h2>React Workout Listings</h2>

            {workouts.map((workout, index) => (

                <div key={index}>

                    <h3>{workout.title}</h3>

                    <p>Duration: {workout.duration}</p>

                    <p>Calories: {workout.calories}</p>

                    <button onClick={() => alert(workout.title)}>
                        Select Workout
                    </button>

                </div>

            ))}

        </div>
    );
}

function FitnessDetails() {

    const [name, setName] = useState("");
    const [workout, setWorkout] = useState("");

    return (
        <div>

            <h2>Fitness Details</h2>

            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Enter Workout"
                value={workout}
                onChange={(e) => setWorkout(e.target.value)}
            />

            <h3>Name: {name}</h3>

            <h3>Workout: {workout}</h3>

            <button onClick={() => alert("Fitness Details Saved")}>
                Submit
            </button>

        </div>
    );
}

function App() {

    const workouts = [

        {
            title: "Running",
            duration: "30 Minutes",
            calories: "300 kcal"
        },

        {
            title: "Cycling",
            duration: "45 Minutes",
            calories: "400 kcal"
        },

        {
            title: "Yoga",
            duration: "60 Minutes",
            calories: "200 kcal"
        }

    ];

    return (
        <div>

            <WorkoutList workouts={workouts} />

            <hr />

            <FitnessDetails />

        </div>
    );
}

export default App;
