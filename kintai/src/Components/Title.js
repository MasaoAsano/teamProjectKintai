const Title = ({ date }) => {
  return (
    <div className="title">
      <h1>{date.getMonth() + 1}月{date.getDate()}日の勤怠入力</h1>
    </div>
  );
};

export default Title;
