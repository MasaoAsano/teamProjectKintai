import "./App.css";
import CalenderData from "./CalenderData";
import InputArea from './Components/InputArea';

function App() {
  return (
    <div className="App">
      <h1 className="head">シン・勤怠入力システム</h1>
      <CalenderData />
      <InputArea />
    </div>
  );
}

export default App;
