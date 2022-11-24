import { useEffect, useState } from "react";
import Memo from "./Memo";
import Register from "./Register";
import Template from "./Template";
import TimeComment from "./TimeComment";
import TimeField from "./TimeField";
import Title from "./Title";

const InputArea = (props) => {
  const [date, setDate] = useState(new Date());
  const [currentTemplate, setCurrentTemplate] = useState("A");
  const [memo, setMemo] = useState("メモ");
  let templateList = [
    { id: "A", displayName: "在宅" ,timeList:[{startHour:8, startMinute:0, endHour:17, endMinute:0, style:"在宅"}]},
    { id: "B", displayName: "在社" ,timeList:[{startHour:8, startMinute:30, endHour:17, endMinute:30, style:"在社"}]},
    { id: "C", displayName: "在社→在宅" ,timeList:[{startHour:8, startMinute:0, endHour:12, endMinute:0, style:"在社"},{startHour:13, startMinute:0, endHour:17, endMinute:0, style:"在宅"}]},
    { id: "D", displayName: "出張" ,timeList:[{startHour:9, startMinute:0, endHour:18, endMinute:0, style:"在社"}]},
  ];
  const [currentTimeList, setCurrentTimeList] = useState(templateList[0].timeList);
  useEffect(() => {
    const template = templateList.find(el => el.id === currentTemplate);
    setCurrentTimeList(template.timeList);
  },[currentTemplate])
  
  return (<div className="inputArea">
    
      <Title date={date} />
      <Template currentTemplate={currentTemplate} setCurrentTemplate={setCurrentTemplate} templateList={templateList}/>
      {currentTimeList.map(timesAndStyle => <TimeField key={Math.random()} date={date} timesAndStyle={timesAndStyle} />)}
      <Memo memo={memo} func={setMemo} />
      <TimeComment />
      <Register />
    </div>
  )
};

export default InputArea;
