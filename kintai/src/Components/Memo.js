const Memo = ({ memo,func }) => {
  return (
    <div>
      <p>メモ欄</p>
      <input
      type="text"
      onChange={(e) => {
        func=(e.target.value)
      }}
      />
      <p>{memo}</p>
    </div>
  )
};

export default Memo;
