import './App.css';
import logo from './logo.svg';
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          라우터를 연결해보자!
        </p>
        <Router />
      </header>
    </div>
  );
}

export default App;
