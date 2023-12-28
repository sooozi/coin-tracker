import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chart from "./pages/Chart";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";
import Price from './pages/Price';

interface IRouterProps {
  toggleDark: () => void;
}

function AppRouter({toggleDark} : IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/coin-tracker" element={<Coins toggleDark={toggleDark} />} />
        <Route path="/coin-tracker/:coinId" element={<Coin />}>
          <Route path="price" element={<Price />} />
          <Route path="chart" element={<Chart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;