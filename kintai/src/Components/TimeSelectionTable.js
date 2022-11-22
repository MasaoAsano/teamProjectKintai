const TimeSelectionTable = () => {
  const timeList = [];
  for (let i = 6; i < 24; i++) {
    for (let j = 0; j < 60; j++) {
      timeList.push(<div>{i}:{String(j).padStart(2, "0")}</div>);
      timeList.push(<hr/>);
    }
  }
  return (
    <div className="timeSelectionTable">
      <div className="scrollView">
        {timeList}
      </div>
    </div>
  )
};

export default TimeSelectionTable;
