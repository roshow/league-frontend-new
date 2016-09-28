import React from 'react';

const playerList = ({listLink, isWinner, isBye) => (
  if (isBye) {
    return isWinner ? 'bye' : 'forfeit';
  }
  else if (!listLink) {
    return 'List missing';
  }
  return <a href={ listLink }>List</a>;
)

const Match = ({ players, gamePlayed, winner }) => (
  <ul className="list-group">
    {
      players.map( ({ destroyed, list_link, name }) => {
        const isWinner = (winner === name);
        const isBye = (gamePlayed === 2);
        const list = (gamePlayed && <span style={{fontWeight:'normal'}}>({ playerList(list_link, isWinner, isBye) })</span>);
        const fontWeightStyle = {
          fontWeight: ( isWinner ? 'bold' : 'normal' )
        };
        return (
          <li className="list-group-item" key={name} style={ fontWeightStyle }>
            <span>{ printname } { list }</span>
            <span className="pull-right">{destroyed}</span>
          </li>
        );
      });
    }
  </ul>
);

export default Match;