import React from 'react';
import {
  StylesProvider,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { store } from './Reducers/Store';
import AppContent from './AppContent';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00b5ad',
    },
  },
});

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppContent />
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  );
};

export default App;
