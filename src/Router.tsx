import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";

function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Coins />} />코인이에욤
          <Route path="/coin" element={<Coin />} />코인이욤
        </Routes>
    </BrowserRouter>)
}

export default Router;