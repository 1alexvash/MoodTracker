// TODO: hide submit log if the user already commited
// FIXME: fix bug with aligning of bars
// TODO: add some info what's the purpose of this application
// TODO: draw an image
// TODO: make bars clickable
// => after click show information
// TODO: save date to localStorage

import React, { useState } from "react";

import moment from "moment";

import "./scsss/main.scss";

const App = () => {
  const today = moment().format("dddd, MMMM Do, YYYY");
  const [days, setDays] = useState([
    {
      happiness: 55,
      text: "55",
      date: new Date(),
    },
    {
      happiness: 50,
      text: "50",
      date: new Date(),
    },
    {
      happiness: 45,
      text: "45",
      date: new Date(),
    },
  ]);
  const [happiness, setHappiness] = useState(75);
  const [text, setText] = useState("");

  const submitLog = (event) => {
    event.preventDefault();
    console.log("happiness:", happiness);
    setDays([
      ...days,
      {
        happiness,
        text,
        date: moment().format("dddd, MMMM Do, YYYY"),
      },
    ]);
    setText("");
  };

  return (
    <div className="App">
      <h1 className="heading">Mood Tracker</h1>
      <div className="today">Today is {today}</div>
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
        <textarea
          required
          placeholder="Add additional information"
          rows="5"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit Log</button>
      </form>
    </div>
  );
};

export default App;
