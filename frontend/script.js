
document.getElementById("fitnessForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let workout = document.getElementById("workout").value;
    let duration = Number(document.getElementById("duration").value);
    let calories = Number(document.getElementById("calories").value);

    if (name === "" || duration <= 0 || calories <= 0 ||
        !Number.isFinite(duration) || !Number.isFinite(calories)) {

        alert("Please enter valid fitness details");

    } else {

        fetch("http://localhost:5000/fitness", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                workout: workout,
                duration: duration,
                calories: calories
            })

        })

        .then(response => {
            if (!response.ok) {
                throw new Error("Server error");
            }

            return response.text();
        })

        .then(data => {
            alert(data);
            document.getElementById("fitnessForm").reset();
        })

        .catch(error => {
            alert("Could not save record. Check backend server.");
        });

    }

});
