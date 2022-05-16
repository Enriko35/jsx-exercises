import logo from "./logo.svg";
import "./App.css";
import Sum from "./Sum";

const hello = <h1> Hello, World!</h1>;

const welcome = (name) => {
  return <h1>{name}</h1>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {hello}
        {welcome("Eric")}
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
        <Sum />
      </header>
    </div>
  );
}

export default App;
