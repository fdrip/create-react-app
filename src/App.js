import logo from './logo.svg';
import './App.css';

function App() {

  const handleQuit = () => {
    const newWindow = window.open("", "_self");
    window.close();
    newWindow.close();
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thank you for subscribing, you can cancel your subscription at anytime in your account settings.
          <div>
            <button onClick={handleQuit}> Quit </button>
          </div>
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
