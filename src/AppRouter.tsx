import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";
import { theme } from './theme';

function AppRouter() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/coin-tracker" element={<Coins />} />
        <Route path="/coinId" element={<Coin />} />
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default AppRouter;