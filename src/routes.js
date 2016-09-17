import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import RankingsPage from './containers/RankingsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={RankingsPage}/>
    <Route path="rankings(/:division/:season)" component={RankingsPage}/>
  </Route>
);