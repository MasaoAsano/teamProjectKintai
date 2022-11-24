import { useEffect, useState } from "react";
import "../styles/timeField.css";
import SelectorTitle from "./SelectorTitle";
import TimeInput from "./TimeInput";
import WorkStyleSelector from "./WorkstyleSelector";

const TimeField = ({ dateList, setDateList, index, workTime, setWorkTime }) => {
  return (
    <div className="timeField">
      <div>
        <SelectorTitle />
        <WorkStyleSelector
          dateList={dateList}
          setDateList={setDateList}
          index={index}
        />
        <TimeInput
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
