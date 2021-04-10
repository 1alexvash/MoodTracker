// FIXME: fix bug with aligning of bars
// TODO: add some info what's the purpose of this application
// TODO: draw a logo
// TODO: make bars clickable
// => after click show information
// TODO: save date to localStorage

import React, { useState } from "react";

import moment from "moment";

import "./scsss/main.scss";

const App = () => {
  const today = moment().format("dddd, MMMM Do, YYYY");

  const [day, setDay] = useState(null);
  const [days, setDays] = useState([
    {
      happiness: 55,
      text: "55",
      date: moment().subtract(3, "days").format("dddd, MMMM Do, YYYY"),
    },
    {
      happiness: 50,
      text: "50",
      date: moment().subtract(2, "days").format("dddd, MMMM Do, YYYY"),
    },
    {
      happiness: 45,
      text: "I had kinda depression, but to my lack I was able to deal with it",
      date: moment().subtract(1, "days").format("dddd, MMMM Do, YYYY"),
    },
  ]);
  const [happiness, setHappiness] = useState(75);
  const [text, setText] = useState("");

  const loggedToday = days.some((day) => day.date === today);

  const submitLog = (event) => {
    event.preventDefault();
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
            onClick={() => setDay(day)}
          />
        ))}
      </div>
      {day && (
        <div className="day-details">
          <p className="score">
            Happiness score: <strong>{day.happiness}</strong>
          </p>
          <strong>Note:</strong>
          <p className="text">{day.text}</p>
          <p className="date">{day.date}</p>
          <div className="close" onClick={() => setDay(null)}>
            ❌
          </div>
        </div>
      )}
      {/* TODO: add condition if already logged */}
      {!loggedToday ? (
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
      ) : (
        <div>
          <p>That's it for today</p>
          <p>Come back to log tomorrow</p>
        </div>
      )}
    </div>
  );
};

export default App;
