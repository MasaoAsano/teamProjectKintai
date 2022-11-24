const WorkstyleSelector = ({ selected }) => {
  const uniqueName = "workstyle" + Math.random()
  return (
    <div  className="workstyleSelector">
      {
        ["在社", "在宅"].map( style => <>
          <input key={style} type="radio" id={style + uniqueName} name={uniqueName} value={style} defaultChecked={style===selected} />
          <label key={style + "label"} htmlFor={style + uniqueName}>{style}</label>
        </>)
      }
    </div>
  );
};

export default WorkstyleSelector;
