/* eslint-disable react/react-in-jsx-scope */
import { Toaster } from 'react-hot-toast';
import { ThemeProvider, createTheme } from '@mui/material';
import { MuiThemeProvider } from '@material-ui/core';
import PrincipalRoutes from './routes';
import GlobalStyle from './globalStyles';

const App = () => {
  const theme = createTheme({
    palette: {
      type: 'dark',
      background: {
        default: '#000000',
      },
      secondary: {
        main: '#E19A4C',
      },
    },
  });

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>

          <PrincipalRoutes />
          <Toaster />
          <GlobalStyle />
        </ThemeProvider>
      </MuiThemeProvider>
    </>

  );
};

export default App;
