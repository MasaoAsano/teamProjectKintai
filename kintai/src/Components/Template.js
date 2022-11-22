import { useState } from "react";

// TODO:
// const templates = fetch(この人のテンプレート一覧を取得する);

const Template = ({ currentTemplate, setCurrentTemplate }) => {
  const [templateList, setTemplateList] = useState([currentTemplate]);

  return (
    <div></div>
  )
};

export default Template;