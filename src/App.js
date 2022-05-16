import logo from "./logo.svg";
import "./App.css";

const hello = "Hello, World!";

const welcome = (name) => {
  return (
    <div>
      <h1>hello, {name}</h1>
    </div>
  );
};

const sum = (a, b) => {
  return (
    <div>
      <h2>{a + b}</h2>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {hello}
        {welcome("Eric")}
        {sum(2, 3)}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
