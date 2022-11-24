import { useEffect, useState } from "react";
import Memo from "./Memo";
import Register from "./Register";
import Template from "./Template";
import TimeComment from "./TimeComment";
import TimeField from "./TimeField";
import Title from "./Title";

let templateList = [
  { id: "A", displayName: "在宅" ,timeList:[{startHour:8, startMinute:0, endHour:17, endMinute:0, style:"在宅"}]},
  { id: "B", displayName: "在社" ,timeList:[{startHour:8, startMinute:30, endHour:17, endMinute:30, style:"在社"}]},
  { id: "C", displayName: "在社→在宅" ,timeList:[{startHour:8, startMinute:0, endHour:12, endMinute:0, style:"在社"},{startHour:13, startMinute:0, endHour:17, endMinute:0, style:"在宅"}]},
  { id: "D", displayName: "出張" ,timeList:[{startHour:9, startMinute:0, endHour:18, endMinute:0, style:"在社"}]},
];

const InputArea = ({ kintaiList, setKintaiList }) => {
  const [date, setDate] = useState(new Date());
  const [currentTemplate, setCurrentTemplate] = useState("A");
  const [note, setNote] = useState("");
  const convertToDateList = (timeList) => timeList.map(timeAndStyle => {
    const startDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      timeAndStyle.startHour,
      timeAndStyle.startMinute
    );
    const endDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      timeAndStyle.endHour,
      timeAndStyle.endMinute
    );
    return { startDate, endDate, style: timeAndStyle.style };
  })
  const [dateList, setDateList] = useState(convertToDateList(templateList[0].timeList));
//  let timeList = templateList[0].timeList.slice();
  const [workTime, setWorkTime] = useState(0);
  const [overtime, setOvertime] = useState(1.5);
  
  useEffect(() => {
    const template = templateList.find(el => el.id === currentTemplate);
//    setTimeList(template.timeList);
    setDateList(convertToDateList(template.timeList));
  },[currentTemplate]);

  return (
    <div className="inputArea">
      <Title date={date} />
      <Template
        currentTemplate={currentTemplate}
        setCurrentTemplate={setCurrentTemplate}
        templateList={templateList}/>
      {dateList.map((_, index) => 
        <TimeField
          key={Math.random()}
          date={date}
          dateList={dateList}
          setDateList={setDateList}
          index={index}
          workTime={workTime}
          setWorkTime={setWorkTime}
        />)
      }
      <Memo note={note} setNote={setNote} />
      <TimeComment
        dateList={dateList}
        setWorkTime={setWorkTime}
        setOvertime={setOvertime}
      />
      <Register
        setKintaiList={setKintaiList}
        date={date}
        dateList={dateList}
        note={note}
        workTime={workTime}
        overtime={overtime}
      />
    </div>
  )
};

export default InputArea;
