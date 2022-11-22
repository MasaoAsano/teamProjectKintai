const Title = ({ date }) => {
  return (
    <h1>{date.getMonth() + 1}月{date.getDate()}日の勤怠入力</h1>
  );
};

export default Title;
