import { useEffect, useState } from "react";
import SelectionTable from "./SelectionTable";

const TimeInput = ({ startDate, endDate }) => {
  const createDisplayTime = (date) => date.getHours() + ":" + String(date.getMinutes()).padStart(2, "0");
  const [startTime, setStartTime] = useState(startDate);
  const [displayTimeStart, setDisplayTimeStart] = useState(createDisplayTime(startTime));
  const [endTime, setEndTime] = useState(endDate);
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

  const setEnteredTime = (value, inStart) => {
    let re = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):?(0[0-9]|[1-5][0-9])$/;
    if (!re.test(value)) {
      setDisplayTimeStart(createDisplayTime(startTime));
      setDisplayTimeEnd(createDisplayTime(endTime));
      return;
    }
    
    let base = value;
    re = /^[0-9]:?(0[0-9]|[1-5][0-9])$/;
    if (re.test(value)) {
      base = "0" + value;
    }

    const hour = base.slice(0, 2);
    const minute = base.slice(-2);
    const enteredDate = new Date(
      startTime.getFullYear(),
      startTime.getMonth(),
      startTime.getDate(),
      hour,
      minute
    );
    if (inStart) {
      setStartTime(enteredDate);
    } else {
      setEndTime(enteredDate);
    }
  }

  const focusChanged = (inStart) => {
    return (e) => {
      if (e.currentTarget.contains(e.relatedTarget)) {
        // return when swapping focus between children
        return;
      }
      setEnteredTime(e.target.value, inStart);
      setFocusOnStart(false);
      setFocusOnEnd(false);
    }
  }

  const onKeyDown = (inStart) => {
    return (e) => {
      if (e.nativeEvent.isComposing || e.key !== 'Enter') {
        return
      }
      e.preventDefault();

      setEnteredTime(e.currentTarget.value, inStart);
    }
  }
  
  return (
    <div className="timeInputField">
      <div className="timeInput" onFocus={()=>{ setFocusOnStart(true) }} onBlur={focusChanged(true)}>
        <input 
          type="text"
          placeholder="開始時刻"
          value={displayTimeStart}
          onChange={timeInputted}
          onKeyDown={onKeyDown(true)}
        />
        {focusOnStart ? <SelectionTable defaultDate={startTime} setTime={setStartTime} /> : <></>}
      </div>
      <p>~</p>
      <div className="timeInput" onFocus={()=>{ setFocusOnEnd(true) }} onBlur={focusChanged(false)}>
        <input 
          type="text" 
          placeholder="終了時刻" 
          value={displayTimeEnd} 
          onChange={timeInputted} 
          onKeyDown={onKeyDown(false)}
        />
        {focusOnEnd ? <SelectionTable defaultDate={endTime} setTime={setEndTime}/> : <></>}
      </div>
    </div>
  )
};

export default TimeInput;
