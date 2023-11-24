import { Route, Routes } from "react-router-dom";
import './App.css';
import logo from './logo.svg';
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          라우터를 연결해보자!
        </p>
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path="/coin" element={<Coin />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
