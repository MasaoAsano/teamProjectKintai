const Memo = ({ note, setNote }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="メモを入力"
        defaultValue={note}
        onChange={(e) => { setNote(e.currentTarget.value) }}
      />
    </div>
  );
};

export default Memo;
