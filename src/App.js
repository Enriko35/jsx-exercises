import logo from "./logo.svg";
import "./App.css";

const hello = <h1> Hello, World!</h1>;

const welcome = (name) => {
  return <h1>{name}</h1>;
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
