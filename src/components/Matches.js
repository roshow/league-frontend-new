import React from 'react';
import Match from './Match';

const Matches = ( { matches, matchList, players }) => (
  <div className="matches">
    { matchList.map( matchId => <Match { ...matches[matchId] } key={ matchId } /> ) }
  </div>
);

export default Matches;