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
  palette: {
    primary: {
      main: '#3f87f5'
    }
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#4c4c4c'
    },
    subtitle1: {
      color: '#d1d1d1'
    },
    body1: {
      color: '#646464',
      lineHeight: 1.7
    }
  },
  overrides: {
    MuiTabs: {
      indicator: {
        height: 4,
        borderRadius: 2,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'uppercase',
        fontWeight: 'bold'
      },
      textColorInherit: {
        color: '#646464',
        opacity: 0.4
      }
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
