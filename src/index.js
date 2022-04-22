import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress'
import {PersistGate} from 'redux-persist/integration/react';
import  {persistor} from './store/index';
import  store from './store/index';
import { Provider } from 'react-redux';

const theme = createTheme({
  palette: {
    type: 'dark',
  //   primary: {
  //     main: purple[200],
  //   },
  //   secondary: {
  //     main: purple[500],
  //   },
  // },
  //   typography: {
  //     fontSize: 18,
  },
})  



ReactDOM.render(
  <React.StrictMode >
    <Provider store={store}>
      <PersistGate loading = {<CircularProgress/>} persistor = {persistor}  >
        <ThemeProvider theme={theme}>
          <App/>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

