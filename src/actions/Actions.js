import fetch from 'isomorphic-fetch';

// export const API_ROOT = 'https://nycxwing-league-api.herokuapp.com';
const API_ROOT = 'http://localhost:3001/api';
// const apiRoute = path => `${API_ROOT}/${path}`;
const fetchApi = path => fetch(`${API_ROOT}/${path}`).then( response => response.json() );

export const GET_ALL_PLAYERS_REQUEST = 'GET_ALL_PLAYERS_REQUEST';
export const GET_ALL_PLAYERS_RESPONSE = 'GET_ALL_PLAYERS_RESPONSE';
export const GET_ALL_PLAYERS_ERROR = 'GET_ALL_PLAYERS_ERROR';

export const GET_RANKINGS_REQUEST = 'GET_RANKINGS_REQUEST';
export const GET_RANKINGS_RESPONSE = 'GET_RANKINGS_RESPONSE';
export const GET_RANKINGS_ERROR = 'GET_RANKINGS_ERROR';


const dispatchType = type => ({ type });

export function getRankings (division, season) {

	const key = `${division}${season}`;

	return ( dispatch, getState ) => {

		if (getState().rankings[key]) {
			return;
		}
		
		dispatch(dispatchType(GET_RANKINGS_REQUEST));

		setTimeout( () => {
		
		
		fetchApi(`rankings/${division}/${season}`).then( ({ division, season, rankings }) => dispatch({
  		type: GET_RANKINGS_RESPONSE,
  		ranking: {
  			[`${division}${season}`]: rankings
  		}
    }));
		
		},1000);
    
	};
}

function dispatchAllPlayers (playersArr) {

	const players = playersArr.reduce( ( obj, player ) => {	  		
		obj[player.name] = player;
		return obj;
	}, {});

	const playersList = Object.keys(players).sort();

	return {
		type: GET_ALL_PLAYERS_RESPONSE,
		players,
		playersList
	};

}

export function getAllPlayers () {
	return dispatch => {
		dispatch(dispatchType(GET_ALL_PLAYERS_REQUEST));
		fetchApi('players').then( playersArr => dispatch(dispatchAllPlayers(playersArr)) );
	};
}