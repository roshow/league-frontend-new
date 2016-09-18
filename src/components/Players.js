import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Players = ( { players, playersList } ) => (
  <div className="container small playersList">
    <ul className="list-group" style={{textAlign:`center`}}>
      {
        playersList.map( player => (
          <li className="list-group-item" key={ player } ><Link to={ `/players/${ player }` }>{players[player].print_name}</Link></li>
        ))
      }
    </ul>
  </div>
);

Players.propTypes = {
  players: PropTypes.object.isRequired,
  playersList: PropTypes.array.isRequired
};

export default Players;