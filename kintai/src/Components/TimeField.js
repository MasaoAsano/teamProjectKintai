import "../styles/timeField.css";
import SelectorTitle from "./SelectorTitle";
import TimeInput from "./TimeInput";
import WorkStyleSelector from "./WorkstyleSelector";

const TimeField = () => {
  return (
    <div className="timeField">
      <div>
        <div>dummy</div>
        <div>dummy</div>
        <div>dummy</div>
        <div>dummy</div>
        <SelectorTitle />
        <WorkStyleSelector />
        <TimeInput />
      </div>
    </div>
  );
};

export default TimeField;
