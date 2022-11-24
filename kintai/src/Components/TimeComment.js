const TimeComment = ({ dateList, setWorkTime, setOvertime }) => {
  let workTimeTotal = 0;
  for (const workTime of dateList) {
    const startTime = workTime.startDate;
    const endTime = workTime.endDate;
    workTimeTotal += (endTime.getTime() - startTime.getTime()) / 1000;
  }
  const workHour = Math.floor(workTimeTotal / (60 * 60));
  const workMinute = Math.floor((workTimeTotal - workHour * 60 * 60) / 60);

  return (
    <div>
      <p>勤務時間 {workHour + ":" + String(workMinute).padStart(2, "0")}</p>
      <p>残業時間</p>
    </div>
  )
};

export default TimeComment;
