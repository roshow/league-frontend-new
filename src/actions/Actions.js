import fetch from 'isomorphic-fetch';

export const GET_RANKINGS_REQUEST = 'GET_RANKINGS_REQUEST';
export const GET_RANKINGS_RESPONSE = 'GET_RANKINGS_RESPONSE';
export const GET_RANKINGS_ERROR = 'GET_RANKINGS_ERROR';

export function getRankings (division, season) {
	return ( dispatch, getState ) => {
		
		dispatch({
			type: GET_RANKINGS_REQUEST
		});

		return fetch(`https://nycxwing-league-api.herokuapp.com/api/rankings/season/${season}/division/${division}`)
			.then( response => response.json() )
			.then( rankings => dispatch({
	  		type: GET_RANKINGS_RESPONSE,
	  		rankings
	    }));
	};
}