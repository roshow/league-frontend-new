import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import DevTools from './containers/DevTools';
import routes from './routes';
import rootReducer from './reducers/rootReducer';

import './styles/reset.css';
import './styles/bootstrap.css';
import './styles/App.css';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, createLogger()),
    DevTools.instrument()
  )
);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} onUpdate={() => window.scrollTo(0, 0)} />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
