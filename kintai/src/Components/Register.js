import "../styles/register.css"
const Register = ({ setKintaiList, date, timeList, note }) => {

  const buttonClicked = () => {
    console.log(date, timeList, note);
  };

  return (
    <div className="register">
      <button onClick={buttonClicked}>登録</button>
    </div>
  )
};

export default Register;
