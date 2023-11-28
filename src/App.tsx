import { ThemeProvider } from "styled-components";
import AppRouter from "./AppRouter";
import GlobalStyle from './style/GlobalStyle';
import { theme } from './theme';

function App() {
  return ( 
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;