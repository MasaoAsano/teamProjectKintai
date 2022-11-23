// TODO:
// const templates = fetch(この人のテンプレート一覧を取得する);

const Template = ({ currentTemplate, setCurrentTemplate, templateList }) => {
  // const [templateList, setTemplateList] = useState([currentTemplate]);



  
  return (
    <div className="">
    <select onChange={(e) => {
      let city = e.target.value;
      console.log('city',city);
      setCurrentTemplate(city ? city : null);
      console.log('currentTemplate',currentTemplate);
    }}>
      <option value="">（勤務テンプレート選択…）</option>
      {templateList.map(cityOption => <option key={cityOption.id} value={cityOption.id}>{cityOption.displayName}</option>)}
    </select>
  </div>
  )
};

export default Template;