import React from 'react';
import {
  StylesProvider,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import style from './App.module.css';
import { Header } from './Components/Header';
import { Score } from './Components/Score';
import { Steps } from './Components/Steps';
import { stepsArray } from './birdsData';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#21ba45',
      dark: '#035617',
    },
  },
});

const App = (): JSX.Element => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={style.App}>
          <Header title="SongBird" />
          <Score />
          <Steps activeStep={2} steps={stepsArray} />
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
