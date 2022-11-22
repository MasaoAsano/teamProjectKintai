const WorkstyleSelector = () => {
  return (
    <div className="workstyleSelector">
      {
        ["在社", "在宅"].map( style => <>
          <input type="radio" id={style} name="workstyle" value={style} />
          <label for={style}>{style}</label>
        </>)
      }
    </div>
  );
};

export default WorkstyleSelector;
