import logo from './logo.svg';
import './App.css';
const flag = true;
const logik = false;
const count = 31;
var sum;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'blue',
          fontSize: '42px'
        }}>
          Hello World!
        </p>
        <p>
          {count}
        </p>
        <p>
          {flag && 'flag is true'}
          {undefined}
          {null}
        <p>
          {logik ? 'logik is true' : 'logik is false'}
        </p>
        </p>
        <p>
          {sum = 23 +10}
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
