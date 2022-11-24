import { useEffect, useState } from "react";
import "../styles/timeField.css";
import SelectorTitle from "./SelectorTitle";
import TimeInput from "./TimeInput";
import WorkStyleSelector from "./WorkstyleSelector";

const TimeField = ({ date, dateList, setDateList, index, workTime, setWorkTime }) => {
  // const startDate = new Date(
  //   date.getFullYear(),
  //   date.getMonth(),
  //   date.getDate(),
  //   timeList[index].startHour,
  //   timeList[index].startMinute
  // );
  // const endDate = new Date(
  //   date.getFullYear(),
  //   date.getMonth(),
  //   date.getDate(),
  //   timeList[index].endHour,
  //   timeList[index].endMinute
  // );

  // const [start, setStart] = useState(startDate);
  // const [end, setEnd] = useState(endDate);
  // const [style, setStyle] = useState(timeList[index].style);

  return (
    <div className="timeField">
      <div>
        <SelectorTitle />
        <WorkStyleSelector
          selected={dateList.style}
          setDateList={setDateList}
          index={index}
        />
        <TimeInput
          // startDate={start}
          // setStartDate={setStart}
          // endDate={end}
          // setEndDate={setEnd}
          dateList={dateList}
          setDateList={setDateList}
          index={index}
          workTime={workTime}
          setWorkTime={setWorkTime}
        />
      </div>
    </div>
  );
};

export default TimeField;
