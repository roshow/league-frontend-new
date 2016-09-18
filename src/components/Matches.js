import React from 'react';

const Matches = ( { matches, matchList, players }) => (
  <div classNames="matches">
    {
      matchList.map( matchId  => (
        <ul className="list-group" key={ matchId }>
          {
            matches[matchId].players.map( ( { name, list, destroyed} ) => (
              <li className="list-group-item" key={name}>
                <span>{ players[name].print_name } { list }</span>
                <span className="pull-right">{ destroyed }</span>
              </li>
            ))
          }
        </ul>
      ))
    }
  </div>
);

export default Matches;