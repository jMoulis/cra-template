import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import * as serviceWorker from 'serviceWorker';
import { Global } from '@emotion/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyles from 'styles/globalStyles';
import { theme } from 'styles/theme';
import store from 'store';
import { ThemeProvider } from 'emotion-theming';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Global styles={GlobalStyles} />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
