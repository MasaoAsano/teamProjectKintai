import { useState } from "react";

// TODO:
// const templates = fetch(この人のテンプレート一覧を取得する);

const Template = ({ currentTemplate, setCurrentTemplate }) => {
  // const [templateList, setTemplateList] = useState([currentTemplate]);

  let templateList = [
    { id: "A", displayName: "在宅" },
    { id: "B", displayName: "出社" },
    { id: "C", displayName: "出社＆在宅" },
    { id: "D", displayName: "出張" },
  ];


  return (
    <div className="">
    <select onChange={(e) => {
      let city = e.target.value;
      setCurrentTemplate(city ? city : null);
    }}>
      <option value="">（勤務テンプレート選択…）</option>
      {templateList.map(cityOption => <option key={cityOption.id} value={cityOption.id}>{cityOption.displayName}</option>)}
    </select>
  </div>
  )
};

export default Template;