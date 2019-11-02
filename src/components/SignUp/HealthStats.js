import React, { useState } from "react";

const HealthStats = (props) => {
    const [user, setUser] = useState({
        sleep:"",
        breaks:"",
        exercise:"",
        hydration:"",
        healthyfoods:"",
        stretches:"",
        teambuilding:""
    });


const handleChanges = e => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(user);
};

return(
    <div>
        <h1>Let's Get Your HP Ranked</h1>
            <form onSubmit={handleSubmit}>
        <h1>How many times did you sleep over 6 hours this week?</h1>
                <input
                type="text"
                name="sleep"
                placeholder="Enter Your Hours of Sleep Here"
                onChange={handleChanges}
                />
        <h1>How many times this past week did you take proper Zoom meeting breaks as a team?</h1>
                <input
                type="text"
                name="breaks"
                placeholder="Enter Your Amounts of Breaks Taken Here"
                onChange={handleChanges}
                />
        <h1>How many times did you exercise for at least 30 minutes this past week?</h1>
                <input
                type="text"
                name="exercise"
                placeholder="Enter Your Amounts of Exercise Here"
                onChange={handleChanges}
                />
        <h1>How many times did you drink at least 8 glasses of water in a day this past week?</h1>
                <input
                type="text"
                name="hydration"
                placeholder="Enter Your Amount of Water Here"
                onChange={handleChanges}
                />
        <h1>How many times did you incorporate a fruit or vegetable into your day this past week?</h1>
                <input
                type="text"
                name="healthyfoods"
                placeholder="Enter Your Dosage of Healthy Fruit or Veggies Here"
                onChange={handleChanges}
                />
        <h1>How many times this past week did you do desk stretches?</h1>
                <input
                type="text"
                name="stretches"
                placeholder="Enter Your Times You Stretched Here"
                onChange={handleChanges}
                />
        <h1>How many times have you met with your teammates this past week to play a game or chat?</h1>
                <input
                type="text"
                name="teambuilding"
                placeholder="Enter Your Times You Hung Outside of Lambda With A Teammate"
                onChange={handleChanges}
                />
                <button type="submit">Venture Onwards!</button>
            </form>
    </div>
)
};
export default HealthStats;