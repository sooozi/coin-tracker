import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chart from "./pages/Chart";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";
import Price from "./pages/Price";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/coin-tracker" element={<Coins />} />
        <Route path="/coin-tracker/:coinId" element={<Coin />}>
          <Route path="price" element={<Price />} />
          <Route path="chart" element={<Chart coinId={''} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;