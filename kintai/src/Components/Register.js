import "../styles/register.css"
const Register = ({ setRegister }) => {

  const buttonClicked = () => {
    setRegister(true);
  };

  return (
    <div className="register">
      <button onClick={buttonClicked}>登録</button>
    </div>
  )
};

export default Register;
