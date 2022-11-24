import "./App.css";
import CalenderData from "./CalenderData";
import InputArea from "./Components/InputArea";
import React, { useState } from "react";

function App() {
  const workResults = [
    {
      date: "20221107",
      workingTime: 9,
      approved: true,
    },
    {
      date: "20221108",
      workingTime: 8,
      approved: true,
    },
    {
      date: "20221109",
      workingTime: 13,
      approved: false,
    },
  ];
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="App">
      <CalenderData
        workResults={workResults}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <InputArea />
    </div>
  );
}

export default App;
