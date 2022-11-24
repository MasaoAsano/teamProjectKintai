import { useEffect, useState } from "react";
import Memo from "./Memo";
import Register from "./Register";
import Template from "./Template";
import TimeComment from "./TimeComment";
import TimeField from "./TimeField";
import Title from "./Title";

const InputArea = ({ date, dateList, setDateList, templateID, setTemplateID, templateList, setRegister }) => {
  const [note, setNote] = useState("");

  return (
    <div className="inputArea">
      <Title date={date} />
      <Template
        currentTemplate={templateID}
        setCurrentTemplate={setTemplateID}
        templateList={templateList}/>
      {dateList.map((_, index) => 
        <TimeField
          key={Math.random()}
          dateList={dateList}
          setDateList={setDateList}
          index={index}
        />)
      }
      <Memo note={note} setNote={setNote} />
      <TimeComment
        dateList={dateList}
      />
      <Register
        setRegister={setRegister}
      />
    </div>
  )
};

export default InputArea;
