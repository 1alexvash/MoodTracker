// TODO: import moment library
// TODO: after adding new item to the days add date mark
// TODO: check if the date mark is unique
// TODO: hide submit log if the user already commited
// FIXME: fix bug with aligning of bars
// TODO: add some info what's the purpose of this application
// TODO: draw an image
// TODO: make bars clickable
// => after click show information
// TODO: save date to localStorage

import React, { useState } from "react";

import "./scsss/main.scss";

const App = () => {
  const [days, setDays] = useState([
    {
      happiness: 51,
      text: "50",
      date: new Date(),
    },
    {
      happiness: 50,
      text: "50",
      date: new Date(),
    },
    {
      happiness: 49,
      text: "50",
      date: new Date(),
    },
  ]);
  const [happiness, setHappiness] = useState(75);

  const submitLog = (event) => {
    event.preventDefault();
    console.log("happiness:", happiness);
    setDays([...days, happiness]);
  };

  return (
    <div className="App">
      <h1 className="heading">Mood Tracker</h1>
      <div className="days">
        {days.map((day, index) => (
          <div
            className="day"
            key={index}
            style={{ height: `${day.happiness}%` }}
          />
        ))}
      </div>
      {/* TODO: add condition if already logged */}
      <form onSubmit={submitLog} className="submit-log">
        <input
          type="range"
          min="0"
          max="100"
          value={happiness}
          onChange={(e) => setHappiness(e.target.value)}
        />
        <textarea placeholder="Add additional information" rows="5" />
        <button type="submit">Submit Log</button>
      </form>
    </div>
  );
};

export default App;
