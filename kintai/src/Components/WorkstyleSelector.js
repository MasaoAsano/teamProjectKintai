const WorkstyleSelector = () => {
  return (
    <div  className="workstyleSelector">
      {
        ["在社", "在宅"].map( style => <>
          <input key={style} type="radio" id={style} name="workstyle" value={style} />
          <label key={style + "label"} htmlFor={style}>{style}</label>
        </>)
      }
    </div>
  );
};

export default WorkstyleSelector;
