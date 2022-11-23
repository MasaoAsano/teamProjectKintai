const Memo = ({ memo,func }) => {
  return (
    <div>
      <p>メモ欄</p>
      <input
      type="text"
      onChange={(e) => {
        func=(e.target.value)
        console.log('func',func);
        console.log('memo',memo);
      }}
      />
      <p>memo{func}</p>
      
    </div>
  )
};

export default Memo;
