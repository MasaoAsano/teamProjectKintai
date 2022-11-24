const WorkstyleSelector = ({ dateList, setDateList, index }) => {
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
            defaultChecked={style === dateList[index].style}
            onChange={(e)=>{
              const newList = dateList.slice();
              newList.splice(index, 1, {
                startDate: dateList[index].startDate,
                endDate: dateList[index].endDate,
                style
              });
              setDateList(newList);
            }}
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
