import { HelmetProvider } from "react-helmet-async";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from 'styled-components';
import AppRouter from './AppRouter';
import { isDarkAtom } from "./atoms";
import GlobalStyle from './style/GlobalStyle';
import { darkTheme, lightTheme } from './theme';

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return ( 
    <div>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <GlobalStyle />
          <HelmetProvider >
            <AppRouter  />
          </HelmetProvider>
        </ThemeProvider>
    </div>
  );
}

export default App;