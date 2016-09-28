import React from 'react';
import Match from 'Match';

const Matches = ( { matches, matchList, players }) => (
  <div classNames="matches">
    { matchList.map( matchId => <Match match={ matches[matchId] } key={ matchId } /> ) }
  </div>
);

export default Matches;