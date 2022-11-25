import { useEffect, useState } from "react";
import SelectionTable from "./SelectionTable";

const TimeInput = ({ dateList, setDateList, index }) => {
  const createDisplayTime = (date) => date.getHours() + ":" + String(date.getMinutes()).padStart(2, "0");
  const [displayTimeStart, setDisplayTimeStart] = useState(createDisplayTime(dateList[index].startDate));
  const [displayTimeEnd, setDisplayTimeEnd] = useState(createDisplayTime(dateList[index].endDate));
  const [focusOnStart, setFocusOnStart] = useState(false);
  const [focusOnEnd, setFocusOnEnd] = useState(false);
  const [interval, setInterval] = useState(10);

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
      setDisplayTimeStart(createDisplayTime(dateList[index].startDate));
      setDisplayTimeEnd(createDisplayTime(dateList[index].endDate));
      return;
    }
    
    let base = value;
    re = /^[0-9]:?(0[0-9]|[1-5][0-9])$/;
    if (re.test(value)) {
      base = "0" + value;
    }

    const hour = base.slice(0, 2);
    const minute = base.slice(-2);
    const date = dateList[index].startDate;
    const enteredDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      hour,
      minute
    );

    let newDate;
    if (inStart) {
      newDate = {
        startDate: enteredDate,
        endDate: dateList[index].endDate,
        style: dateList[index].style
      };
    } else {
      newDate = {
        startDate: dateList[index].startDate,
        endDate: enteredDate,
        style: dateList[index].style
      };
    }
    const newList = dateList.slice();
    newList.splice(index, 1, newDate);
    setDateList(newList);
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
        return;
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
          tabIndex={index * 2 + 1}
        />
        {focusOnStart ? 
          <SelectionTable
            dateList={dateList}
            setDateList={setDateList}
            index={index}
            type="startDate"
            interval={interval}
            setInterval={setInterval}
          /> : <></>
        }
      </div>
      <p>~</p>
      <div className="timeInput" onFocus={()=>{ setFocusOnEnd(true) }} onBlur={focusChanged(false)}>
        <input 
          type="text" 
          placeholder="終了時刻" 
          value={displayTimeEnd} 
          onChange={timeInputted} 
          onKeyDown={onKeyDown(false)}
          tabIndex={index * 2 + 2}
          />
        {focusOnEnd ?
          <SelectionTable
            dateList={dateList}
            setDateList={setDateList}
            index={index}
            type="endDate"
            interval={interval}
            setInterval={setInterval}
          /> : <></>}
      </div>
    </div>
  )
};

export default TimeInput;
