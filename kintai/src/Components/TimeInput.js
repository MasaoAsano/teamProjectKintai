import TimeSelectionTable from "./TimeSelectionTable";

const TimeInput = () => {
  return (
    <div className="timeInput">
      <input type="text" /><TimeSelectionTable defaultDate={new Date}/>
      <p>~</p>
      <input type="text" />
    </div>
  )
};

export default TimeInput;
