import { useEffect, useRef } from "react";

/**
 * TimeSelectionTable 時刻選択肢一覧
 * @param { Date } Object.defaultDate 一覧の中心に配置する時刻
 * @param { function } Object.setTime 時刻を設定する関数
 * @returns Reactコンポーネント
 */
const TimeSelectionTable = ({ defaultDate, setTime }) => {
  const ref = useRef(null);
  const timeList = [];
  for (let hour = 6; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute++) {
      const time = hour + ":" + String(minute).padStart(2, "0");
      if (hour === defaultDate.getHours() && minute === defaultDate.getMinutes()) {
        timeList.push(<div key={time} ref={ref} onClick={timeClicked}>{time}</div>);
      } else {
        timeList.push(<div key={time} onClick={timeClicked}>{time}</div>);
      }
      timeList.push(<hr key={time + "hr"}/>);
    }
  }

  function timeClicked(selectedTime) {
    const [hour, minute] = selectedTime.target.innerText.split(":");
    const selectedDate = new Date(
      defaultDate.getFullYear(),
      defaultDate.getMonth(),
      defaultDate.getDate(),
      hour,
      minute
    );
    setTime(selectedDate)
  }

  useEffect(() => {
    ref.current.scrollIntoView({
      block: 'center'
    })
  }, []);

  return (
    <div className="timeSelectionTable">
      <div className="scrollView">
        {timeList}
      </div>
    </div>
  )
};

export default TimeSelectionTable;
