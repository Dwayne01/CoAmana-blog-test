
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router'
import store, { history, persistor } from './reducers';
import App from './app/App';



ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Route path={'/'} component={App} />
      </ConnectedRouter>
  </PersistGate>
  </Provider>,
  document.getElementById('root')
);