import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from 'styled-components';
import AppRouter from './AppRouter';
import GlobalStyle from './style/GlobalStyle';
import { darkTheme, lightTheme } from './theme';

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark((current) => !current);

  return ( 
    <div>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <GlobalStyle />
          <HelmetProvider >
            <AppRouter toggleDark={toggleDark} />
          </HelmetProvider>
        </ThemeProvider>
    </div>
  );
}

export default App;