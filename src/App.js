import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ProductDetails from './components/ProductDetails';
import { makeStyles } from '@material-ui/core/styles';

const store = createStore(rootReducer);

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#4c4c4c'
    },
    subtitle1: {
      color: '#d1d1d1'
    }
  }
});

const useStyles = makeStyles({
  '@global': {
    body: {
      background: '#ededed',
    }
  }
});

function App() {
  useStyles();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ProductDetails />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
