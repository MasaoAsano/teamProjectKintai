const Memo = ({ note, setNote, dateList }) => {
  const atHome = dateList.find(dateStyle => dateStyle.style === "在宅");
  const defaultNote = note !== "" ? note : atHome ? "在宅勤務" : "";
  return (
    <div className="memo">
      <input
        type="text"
        placeholder="メモを入力"
        value={defaultNote}
        onChange={(e) => { setNote(e.currentTarget.value) }}
      />
    </div>
  );
};

export default Memo;
