import { useEffect, useState } from "react";
import SelectionTable from "./SelectionTable";

const TimeInput = () => {
  const dummyDate = new Date()
  const createDisplayTime = (date) => date.getHours() + ":" + String(date.getMinutes()).padStart(2, "0");
  const [startTime, setStartTime] = useState(dummyDate);
  const [displayTimeStart, setDisplayTimeStart] = useState(createDisplayTime(startTime));
  const [endTime, setEndTime] = useState(dummyDate);
  const [displayTimeEnd, setDisplayTimeEnd] = useState(createDisplayTime(endTime));
  const [focusOnStart, setFocusOnStart] = useState(false);
  const [focusOnEnd, setFocusOnEnd] = useState(false);

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

  const callbackWithDelay = (callback) => {
    setTimeout(() => {
      callback(false);
    }, 200);
  }

  const focusChanged = (toSetFalse) => {
    return (e) => {
      if (e.currentTarget.contains(e.relatedTarget)) {
        // return when swapping focus between children
        console.log(e.cancelable)
        return;
      }
      toSetFalse(false);
    }
  }
  
  return (
    <div className="timeInputField">
      <div className="timeInput" onFocus={()=>{ setFocusOnStart(true) }} onBlur={focusChanged(setFocusOnStart)}>
        <input type="text" placeholder="開始時刻" value={displayTimeStart} onChange={timeInputted} />
        {focusOnStart ? <SelectionTable defaultDate={startTime} setTime={setStartTime} /> : <></>}
      </div>
      <p>~</p>
      <div className="timeInput" onFocus={()=>{ setFocusOnEnd(true) }} onBlur={focusChanged(setFocusOnEnd)}>
        <input type="text" placeholder="終了時刻" value={displayTimeEnd} onChange={timeInputted} />
        {focusOnEnd ? <SelectionTable defaultDate={endTime} setTime={setEndTime}/> : <></>}
      </div>
    </div>
  )
};

export default TimeInput;
