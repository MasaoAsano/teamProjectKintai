const WorkstyleSelector = ({ selected, setStyle }) => {
  const uniqueName = "workstyle" + Math.random();
  return (
    <div className="workstyleSelector">
      {["在社", "在宅"].map((style) => (
        <>
          <input
            key={style}
            type="radio"
            id={style + uniqueName}
            name={uniqueName}
            value={style}
            defaultChecked={style === selected}
            onChange={(e)=>console.log(e)}
          />
          <label key={style + "label"} htmlFor={style + uniqueName}>
            {style}
          </label>
        </>
      ))}
    </div>
  );
};

export default WorkstyleSelector;
