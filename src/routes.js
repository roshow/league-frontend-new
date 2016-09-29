import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import RankingsPage from './containers/RankingsPage';
import PlayersPage from './containers/PlayersPage';
import MatchesPage from './containers/MatchesPage';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ RankingsPage }/>
    <Route path="rankings(/:division/:season)" component={ RankingsPage }/>
    <Route path="players(/:player)" component={ PlayersPage }/>
    <Route path="matches(/:division/:season/:week)" component={ MatchesPage }/>
  </Route>
);