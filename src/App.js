import React, { useState } from "react";

import "./scsss/main.scss";

const App = () => {
  const [days, setDays] = useState([50, 50, 40, 30, 20, 80, 100]);

  const submitLog = (event) => {
    event.preventDefault();
    console.log("Submitting the log");
  };

  return (
    <div className="App">
      <h1 className="heading">Mood Tracker</h1>
      <div className="days">
        {days.map((day, index) => (
          <div className="day" key={index} style={{ height: `${day}%` }} />
        ))}
      </div>
      {/* TODO: add condition if already logged */}
      <form onSubmit={submitLog} className="submit-log">
        <input type="range" min="0" max="100" />
        <textarea placeholder="Add additional information" rows="5" />
        <button type="submit">Submit Log</button>
      </form>
    </div>
  );
};

export default App;
