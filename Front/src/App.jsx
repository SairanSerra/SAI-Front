/* eslint-disable react/react-in-jsx-scope */
import { Toaster } from 'react-hot-toast';
import PrincipalRoutes from './routes';
import GlobalStyle from './globalStyles';

const App = () => (
  <>
    <PrincipalRoutes />
    <Toaster />
    <GlobalStyle />
  </>

);

export default App;
