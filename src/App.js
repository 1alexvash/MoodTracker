// TODO: try using vertical-align to align items in the column

// TODO: show some information window in case of 0 logs
// TODO: draw a logo
// TODO: add overall design look and feel
// TODO: add mobile version

import React, { useState } from "react";

import moment from "moment";

import "./scsss/main.scss";

import lockImg from "./images/lock.png";

const App = () => {
  const today = moment().format("dddd, MMMM Do, YYYY");

  const [day, setDay] = useState(null);
  const [days, setDays] = useState(
    localStorage.days
      ? JSON.parse(localStorage.days)
      : [
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
            text:
              "I had kinda depression, but to my lack I was able to deal with it",
            date: moment().subtract(1, "days").format("dddd, MMMM Do, YYYY"),
          },
        ]
  );
  const [happiness, setHappiness] = useState(75);
  const [text, setText] = useState("");

  const loggedToday = days.some((day) => day.date === today);

  const submitLog = (event) => {
    event.preventDefault();

    const updatedDays = [
      ...days,
      {
        happiness,
        text,
        date: moment().format("dddd, MMMM Do, YYYY"),
      },
    ];

    setDays(updatedDays);
    localStorage.days = JSON.stringify(updatedDays);

    setText("");
  };

  return (
    <div className="App">
      <h1 className="heading">Mood Tracker</h1>
      <div className="today">Today is {today}</div>
      <div className="days">
        <div className="scratch"></div>
        {days.map((day, index) => (
          <div
            className="day"
            key={index}
            style={{ height: `${day.happiness}%` }}
            onClick={() => setDay(day)}
          />
        ))}
        <div className="scratch"></div>
        <div className="locked">
          <img src={lockImg} alt="" />
          <p className="advice">
            Track your mood for <b>7 days</b> <br /> to get some valuable
            insights <br /> on how to increase your overall <br /> well-being
            and happiness
          </p>
        </div>
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
