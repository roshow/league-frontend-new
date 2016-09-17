import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import rootReducer from './reducers/rootReducer';

import './styles/reset.css';
import './styles/bootstrap.css';
import './styles/App.css';

const store = createStore(
  rootReducer,
  applyMiddleware(
  	thunk,
  	createLogger()
  )
);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} onUpdate={() => window.scrollTo(0, 0)} />
  </Provider>,
  document.getElementById('root')
);
