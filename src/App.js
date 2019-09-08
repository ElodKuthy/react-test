import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const store = createStore(rootReducer);

const theme = createMuiTheme({

});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
