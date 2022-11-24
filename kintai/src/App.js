import "./App.css";
import CalenderData from "./CalenderData";
import InputArea from "./Components/InputArea";
import React, { useState } from "react";

function App() {
  const workResults = [
    {
      date: "20221107",
      workingTime: 2,
      approved: true,
    },
    {
      date: "20221108",
      workingTime: 3,
      approved: true,
    },
    {
      date: "20221109",
      workingTime: 4,
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
