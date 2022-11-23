import { useEffect, useState } from "react";
import TimeSelectionTable from "./TimeSelectionTable";

const TimeInput = () => {
  const dummyDate = new Date()
  const createDisplayTime = (date) => date.getHours() + ":" + String(date.getMinutes()).padStart(2, "0");
  const [startTime, setStartTime] = useState(dummyDate);
  const [displayTimeStart, setDisplayTimeStart] = useState(createDisplayTime(startTime));
  const [endTime, setEndTime] = useState(dummyDate);
  const [displayTimeEnd, setDisplayTimeEnd] = useState(createDisplayTime(endTime));

  useEffect(() => {
    setDisplayTimeStart(createDisplayTime(startTime));
  }, [startTime])
  useEffect(() => {
    setDisplayTimeEnd(createDisplayTime(endTime));
  }, [endTime])

  const timeInputted = (e) => {
    if (e.target.placeholder === "開始時刻") {
      setDisplayTimeStart(e.target.value);
    } else {
      setDisplayTimeEnd(e.target.value);
    }
  }

  const timeInputElement = (displayTime, placeholder) => (
    <input type="text" placeholder={placeholder} value={displayTime} onChange={timeInputted} />
  );

  return (
    <div className="timeInput">
      {timeInputElement(displayTimeStart, "開始時刻")}
      <TimeSelectionTable defaultDate={startTime} setTime={setStartTime}/>
      <p>~</p>
      {timeInputElement(displayTimeEnd, "終了時刻")}
      <TimeSelectionTable defaultDate={endTime} setTime={setEndTime}/>
    </div>
  )
};

export default TimeInput;
