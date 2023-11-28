import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/coin-tracker" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;