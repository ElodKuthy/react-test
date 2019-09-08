import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ProductDetails from './components/ProductDetails';

const store = createStore(rootReducer);

const theme = createMuiTheme({

});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ProductDetails />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
