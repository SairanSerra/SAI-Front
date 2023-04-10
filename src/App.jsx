/* eslint-disable react/react-in-jsx-scope */
import { Toaster } from 'react-hot-toast';
import { ThemeProvider, createTheme } from '@mui/material';
import PrincipalRoutes from './routes';
import GlobalStyle from './globalStyles';

const App = () => {
  const theme = createTheme();

  return (
    <>
      <ThemeProvider theme={theme}>

        <PrincipalRoutes />
        <Toaster />
        <GlobalStyle />
      </ThemeProvider>
    </>

  );
};

export default App;
