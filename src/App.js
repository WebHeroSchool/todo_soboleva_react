import logo from './logo.svg';
import './App.css';
import {count} from './number';
import {length} from './number';

const flag = true;
const logik = false;
const c = 31;
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
          {c}
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
        <p>
         {'count * length ='} {count*length}
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
