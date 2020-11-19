import logo from './logo.svg';
import Perepere from './components/Perepere';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <Perepere team="white” position=“3" enable="true" /> 
      </header>
    </div>
  );
}

export default App;
