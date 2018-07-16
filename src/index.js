import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { PersistGate } from 'redux-persist/integration/react';

import App from 'containers/App';
import { weatherTheme } from 'config/Theme';
import configureStore from 'config/ConfigureStore';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const hist = createBrowserHistory();
const MOUNT_NODE = document.getElementById('root');
const initialState = {};
const storeConfiguration = configureStore(initialState, hist);

ReactDOM.render(
  <MuiThemeProvider theme={weatherTheme}>
    <Provider store={storeConfiguration.store}>
      <PersistGate loading={null} persistor={storeConfiguration.persistedStore}>
        <Router history={hist}>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </MuiThemeProvider>,
  MOUNT_NODE,
);
registerServiceWorker();
