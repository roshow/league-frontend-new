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


const makeDispatchObject = (type, payload = {}) => ({ type, payload });

const dispatchRankings = ({ division, season, rankings }) => makeDispatchObject(GET_RANKINGS_RESPONSE, {
  entities: {
    rankings: {
      [`${division}${season}`]: rankings
    }
  }
});

export function getRankings (division, season) {
  const key = `${division}${season}`;
  return ( dispatch, getState ) => {
    if (getState().entities.rankings[key]) {
      return;
    }

    dispatch(makeDispatchObject(GET_RANKINGS_REQUEST));

    // TODO: Remove this setTImeout after you have tests or know you're not breaking the loading indicator
    setTimeout( () => {
      fetchApi(`rankings/${division}/${season}`)
        .then( (response) => dispatch(dispatchRankings(response)));
    },1000);
    
  };
}

function dispatchAllPlayers (playersArr) {

  const { players, playerNames } = playersArr.reduce( ( obj, player ) => {
    const { name, print_name } = player;       
    obj.players[name] = player;
    obj.playerNames[name] = print_name;
    return obj;
  }, { players: {}, playerNames: {}});

  const playersList = playersArr.map( ({ name }) => name ).sort();


  return makeDispatchObject(GET_ALL_PLAYERS_RESPONSE, {
    playersList,
    playerNames,
    entities: {
      players
    }
  });
}

export function getAllPlayers () {
  return dispatch => {
    dispatch(makeDispatchObject(GET_ALL_PLAYERS_REQUEST));
    fetchApi('players').then( playersArr => dispatch(dispatchAllPlayers(playersArr)) );
  };
}