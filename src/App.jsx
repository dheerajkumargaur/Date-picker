import logo from "./logo.svg";
import "./App.css";
import { Dates } from "./Component/Date";

function App() {
  return (
    <div className="App">
      <h1 style={{ "background-color": "grey" }}>Choose Your Date</h1>
      <Dates />
    </div>
  );
}

export default App;
