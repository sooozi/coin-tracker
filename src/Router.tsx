import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";

function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path="/coin" element={<Coin />} />
        </Routes>
    </BrowserRouter>)
}

export default Router;