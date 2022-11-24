// TODO:
// const templates = fetch(この人のテンプレート一覧を取得する);

const Template = ({ currentTemplate, setCurrentTemplate, templateList }) => {
  return (
    <div className="">
      <select
        onChange={(e) => {
          let style = e.target.value;
          setCurrentTemplate(style ? style : null);
        }}
        value={currentTemplate}
      >
      <option value="">（勤務テンプレート選択…）</option>
      {templateList.map(templateOption => <option key={templateOption.id} value={templateOption.id}>{templateOption.displayName}</option>)}
    </select>
  </div>
  )
};

export default Template;