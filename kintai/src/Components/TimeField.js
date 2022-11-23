import "../styles/timeField.css";
import SelectorTitle from "./SelectorTitle";
import TimeInput from "./TimeInput";
import WorkStyleSelector from "./WorkstyleSelector";

const TimeField = ({ date, timesAndStyle }) => {
  const startDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    timesAndStyle.startHour,
    timesAndStyle.startMinute
  );
  const endDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    timesAndStyle.endHour,
    timesAndStyle.endMinute
  );


  return (
    <div className="timeField">
      <div>
        <div>dummy</div>
        <div>dummy</div>
        <div>dummy</div>
        <div>dummy</div>
        <SelectorTitle />
        <WorkStyleSelector selected={timesAndStyle?.style} />
        <TimeInput startDate={startDate} endDate={endDate} />
      </div>
    </div>
  );
};

export default TimeField;
