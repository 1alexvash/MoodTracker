// TODO: try using vertical-align to align items in the column
// https://css-tricks.com/almanac/properties/v/vertical-align/

// todo: make a day active when clicked on it
// TODO: draw a logo
// TODO: add overall design look and feel
// TODO: add mobile version

import React, { useState } from "react";

import moment from "moment";

import "./scsss/main.scss";

import lockImg from "./images/lock.png";

const App = () => {
  const today = moment().format("dddd, MMMM Do, YYYY");

  const [selectedDay, setSelectedDay] = useState(null);
  const [days, setDays] = useState(
    localStorage.days ? JSON.parse(localStorage.days) : []
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
        date: today,
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
        {days.length ? (
          <>
            <div className="scratch"></div>
            {days.map((day, index) => (
              <div
                className={
                  selectedDay && selectedDay.date === day.date
                    ? "day active"
                    : "day"
                }
                key={index}
                style={{ height: `${day.happiness}%` }}
                onClick={() => setSelectedDay(day)}
              />
            ))}
            <div className="scratch"></div>
          </>
        ) : (
          <div className="locked">
            <img src={lockImg} alt="" />
            <p className="advice">
              Track your mood for <b>7 days</b> <br /> to get some valuable
              insights <br /> on how to increase your overall <br /> well-being
              and happiness
            </p>
          </div>
        )}
      </div>
      {selectedDay && (
        <div className="day-details">
          <p className="score">
            Happiness score: <strong>{selectedDay.happiness}</strong>
          </p>
          <strong>Note:</strong>
          <p className="text">{selectedDay.text}</p>
          <p className="date">{selectedDay.date}</p>
          <div
            className="close"
            onClick={() => setSelectedDay(null)}
            title="close"
          >
            ❌
          </div>
        </div>
      )}
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
          {days.length === 0 && (
            <div className="first-log">It's time for the first log</div>
          )}
          <button type="submit">Submit Log</button>
        </form>
      ) : (
        <div>
          <p>That's it for today ✅</p>
          <p>Come back tomorrow</p>
        </div>
      )}
    </div>
  );
};

export default App;
