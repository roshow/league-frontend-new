import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Players = ( { playerNames, playerList } ) => (
  <div className="container small playersList">
    <ul className="list-group" style={{textAlign:`center`}}>
      {
        playerList.map( player => (
          <li className="list-group-item" key={ player } ><Link to={ `/players/${ player }` }>{ playerNames[player] }</Link></li>
        ))
      }
    </ul>
  </div>
);

Players.propTypes = {
  playerNames: PropTypes.object.isRequired,
  playerList: PropTypes.array.isRequired
};

export default Players;