const TimeComment = ({ dateList }) => {
  let workTimeTotal = 0;
  for (const workTime of dateList) {
    const startTime = workTime.startDate;
    const endTime = workTime.endDate;
    workTimeTotal += (endTime.getTime() - startTime.getTime()) / 1000;
  }
  workTimeTotal = Math.max(0, workTimeTotal - 60 * 60);
  const workHour = Math.floor(workTimeTotal / (60 * 60));
  const workMinute = Math.floor((workTimeTotal - workHour * 60 * 60) / 60);
  const overTime = workTimeTotal - 8 * 60 * 60;
  const round = overTime > 0 ? Math.floor : Math.ceil;
  const overHour = round(overTime / (60 * 60));
  const overMinute = round((overTime - overHour * 60 * 60) / 60);
  const sign = overTime > 0 ? "" : "-";

  return (
    <div className="timecomment">
      <p>勤務時間 {workHour + ":" + String(workMinute).padStart(2, "0")}</p>
      <p>残業時間 {sign + Math.abs(overHour) + ":" + String(Math.abs(overMinute)).padStart(2, "0")}</p>
    </div>
  )
};

export default TimeComment;
