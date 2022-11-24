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

const InputArea = ({ setKintaiList }) => {
  const [date, setDate] = useState(new Date());
  const [currentTemplate, setCurrentTemplate] = useState("A");
  const [note, setNote] = useState("メモ");
  const [timeList, setTimeList] = useState(templateList[0].timeList);
  useEffect(() => {
    const template = templateList.find(el => el.id === currentTemplate);
    setTimeList(template.timeList);
  },[currentTemplate]);
  const [workTime, setWorkTime] = useState(0);
  const [overtime, setOvertime] = useState(1.5);
  
  return (
    <div className="inputArea">
      <Title date={date} />
      <Template currentTemplate={currentTemplate} setCurrentTemplate={setCurrentTemplate} templateList={templateList}/>
      {timeList.map(timesAndStyle => 
        <TimeField
          key={Math.random()} 
          date={date} 
          timesAndStyle={timesAndStyle}
          workTime={workTime}
          setWorkTime={setWorkTime}
        />)
      }
      <Memo note={note} setNote={setNote} />
      <TimeComment
        timeList={timeList}
        setWorkingTime={setWorkTime}
        setOvertime={setOvertime}
      />
      <Register
        setKintaiList={setKintaiList}
        date={date}
        timeList={timeList}
        note={note}
        workTime={workTime}
        overtime={overtime}
      />
    </div>
  )
};

export default InputArea;
