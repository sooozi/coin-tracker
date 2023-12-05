// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from 'react-query/devtools'; // 수정된 부분
import { ThemeProvider } from 'styled-components';
import AppRouter from './AppRouter';
import GlobalStyle from './style/GlobalStyle';
import { theme } from './theme';

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//     },
//   },
// });

function App() {
  return ( 
    <div>
      {/* <QueryClientProvider client={queryClient}> */}
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppRouter />
          {/* <ReactQueryDevtools initialIsOpen={true} /> */}
        </ThemeProvider>
      {/* </QueryClientProvider> */}
    </div>
  );
}

export default App;