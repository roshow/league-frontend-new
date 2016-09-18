import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { GET_RANKINGS_REQUEST, GET_RANKINGS_RESPONSE, GET_ALL_PLAYERS_REQUEST, GET_ALL_PLAYERS_RESPONSE } from './../actions/Actions';

const mergeState = ( state, newProps ) => ({
  ...state,
  ...newProps
});

const players = ( state={}, { type, players } ) => {
  switch (type) {
    case GET_ALL_PLAYERS_RESPONSE:
      return mergeState(state, players);

    default:
      return state;
  }
};

const playersList = ( state=[], { type, playersList } ) => {

  switch (type) {
    case GET_ALL_PLAYERS_RESPONSE:
      return [...playersList];

    default:
      return state;
  }
};

const rankings = ( state={}, { type, ranking } ) => {
	switch (type) {
		case GET_RANKINGS_RESPONSE:
      return mergeState(state, ranking);

		default:
			return state;
	}
};

const loading = ( state={ status: false }, { type } ) => {
	switch (type) {
    case GET_ALL_PLAYERS_REQUEST:
    case GET_RANKINGS_REQUEST:
      return {
        status: true,
        type
      };

		case GET_RANKINGS_RESPONSE:
			return {
        status: false
      };

    default:
      return state;
      
	}
};

const rootReducer = combineReducers({
  players,
  playersList,
  rankings,
  loading,
  routing,
});

export default rootReducer;