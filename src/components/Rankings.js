import React, { PropTypes } from 'react';

const Rankings = ( { list = [] } ) => (
	<div className="container rankings">
		<table className="table">
			<thead>
			  <tr>
			    <th>Player Name</th>
			    <th>Points</th>
			    <th>MOV</th>
			    <th>Games Played</th>
			  </tr>
			</thead>
			<tbody>
				{
					list.map( player => (
					  <tr key={ player.name }>
					    <td>{ player.name }</td>
					    <td>{ player.lp }</td>
					    <td>{ player.mov }</td>
					    <td>{ player.games_played }</td>
					  </tr>
					))
				}
			</tbody>
		</table>
	</div>
);

Rankings.PropTypes = {
	ranks: PropTypes.array
};

export default Rankings;