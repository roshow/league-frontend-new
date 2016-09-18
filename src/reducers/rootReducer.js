import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { GET_RANKINGS_REQUEST, GET_RANKINGS_RESPONSE, GET_PLAYERS_REQUEST, GET_PLAYERS_RESPONSE } from './../actions/Actions';

const players = ( state={}, { type, players }) => {
  switch (type) {
    case GET_PLAYERS_RESPONSE:
      return {
        ...state,
        ...players,
      };

    default:
      return state;
  }
};

const rankings = ( state={}, { type, ranking }={} ) => {
	switch (type) {
		case GET_RANKINGS_RESPONSE:
			return {
				...state,
				...ranking,
			};

		default:
			return state;
	}
};

const loading = ( state={ status: false }, { type }={} ) => {
	switch (type) {
		case GET_RANKINGS_REQUEST:
      return {
        status: true,
        type
      };

		case GET_RANKINGS_RESPONSE:
		default:
			return {
        status: false
      };
	}
};

const rootReducer = combineReducers({
  players,
  rankings,
  loading,
  routing,
});

export default rootReducer;