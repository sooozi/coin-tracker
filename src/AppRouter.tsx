import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Coin from "./pages/Coin";
import Coins from "./pages/Coins";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/coinId" element={<Coin />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;