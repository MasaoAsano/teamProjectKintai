import { useState } from "react";
import Memo from "./Memo";
import Register from "./Register";
import Template from "./Template";
import TimeComment from "./TimeComment";
import TimeField from "./TimeField";
import Title from "./Title";

const InputArea = (props) => {
  const [date, setDate] = useState(new Date());
  const [currentTemplate, setCurrentTemplate] = useState("昨日と同じ");
  const [memo, setMemo] = useState("メモ");
  return (
    <div className="inputArea">
      <Title date={date} />
      <Template currentTemplate={currentTemplate} setCurrentTemplate={setCurrentTemplate} />
      <TimeField />
      <Memo memo={memo} func={setMemo} />
      <TimeComment />
      <Register />
    </div>
  )
};

export default InputArea;
