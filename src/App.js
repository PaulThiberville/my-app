import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [result, setResult] = useState();
  const [index, setIndex] = useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/" + index)
      .then((response) => response.json())
      .then((json) => setResult(json));
  }, [index]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <strong>Result :</strong>
          {JSON.stringify(result)}
        </p>

        <button onClick={() => setIndex(index + 1)}>Next</button>
      </header>
    </div>
  );
}

export default App;
