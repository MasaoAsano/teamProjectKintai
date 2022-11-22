import "../styles/timeSelector.css";
import SelectorTitle from "./SelectorTitle";
import TimeInput from "./TimeInput";
import WorkStyleSelector from "./WorkstyleSelector";

const TimeSelector = () => {
  return (
    <div>
      <SelectorTitle />
      <WorkStyleSelector />
      <TimeInput />
    </div>
  );
};

export default TimeSelector;
