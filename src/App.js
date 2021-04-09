import React from "react";

import "./scsss/main.scss";

const App = () => {
  const days = [50, 50, 40, 30, 20, 80, 100];

  return (
    <div className="App">
      <h1 className="heading">Mood Tracker</h1>
      <div className="days">
        {days.map((day, index) => (
          <div className="day" key={index} style={{ height: `${day}%` }} />
        ))}
      </div>
    </div>
  );
};

export default App;
