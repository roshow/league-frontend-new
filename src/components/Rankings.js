import React, { PropTypes } from 'react';

const Rankings = ( { list = [] } ) => (
	<div className="rankings">
		<table className="table">
			<thead>
			  <tr>
			    <th>Player Name</th>
			    <th>Points</th>
			    <th>MOV</th>
			    <th>Record</th>
			  </tr>
			</thead>
			<tbody>
				{
					list.map( ({ name, lp, mov, wins, modWins, losses, modLosses, draws }) => (
					  <tr key={ name }>
					    <td>{ name }</td>
					    <td>{ lp }</td>
					    <td>{ mov }</td>
					    <td>{ wins } ({ modWins }) - { losses } ({ modLosses }) - { draws }</td>
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