import TimeSelectionTable from "./TimeSelectionTable";

const TimeInput = () => {
  return (
    <div className="timeInput">
      <input type="text" /><TimeSelectionTable />
      <p>~</p>
      <input type="text" />
    </div>
  )
};

export default TimeInput;
