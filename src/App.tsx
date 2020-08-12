import React from 'react';
import {
  StylesProvider,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { WindowSizeContextProvider } from 'hooks/WindowSizeContext';
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
      <WindowSizeContextProvider>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppContent />
          </ThemeProvider>
        </StylesProvider>
      </WindowSizeContextProvider>
    </Provider>
  );
};

export default App;
