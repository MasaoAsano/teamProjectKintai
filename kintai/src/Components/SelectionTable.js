import { useEffect, useRef } from "react";

/**
 * SelectionTable 時刻選択肢一覧
 * @param { Date } Object.defaultDate 一覧の中心に配置する時刻
 * @param { function } Object.setTime 時刻を設定する関数
 * @returns Reactコンポーネント
 */
const SelectionTable = ({ defaultDate, setTime }) => {
  const ref = useRef(null);
  const timeList = [];
  let target = 2;
  for (let hour = 6; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute++) {
      const time = hour + ":" + String(minute).padStart(2, "0");
      target++;
      if (hour === defaultDate.getHours() && minute === defaultDate.getMinutes()) {
        target = 0;
      }
      if (target == 2) {
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
    <div className="selectionTable" tabIndex={-1} >
      <div className="scrollView">
        {timeList}
      </div>
    </div>
  )
};

export default SelectionTable;
