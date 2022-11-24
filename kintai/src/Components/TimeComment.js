const TimeComment = ({ timeList, setWorkTime, setOvertime }) => {
  let workTimeTotal = 0;
  for (const workTime of timeList) {
    const startTime = new Date(`1970-01-01 ${workTime.startHour}:${workTime.startMinute}:00`);
    const endTime = new Date(`1970-01-01 ${workTime.endHour}:${workTime.endMinute}:00`);
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
