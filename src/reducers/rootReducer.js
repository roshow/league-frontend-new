import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { GET_RANKINGS_RESPONSE, GET_RANKINGS_REQUEST } from './../actions/Actions';

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

const gettingRankings = ( state, { type }={} ) => {
	switch (type) {
		case GET_RANKINGS_REQUEST:
			return true;

		case GET_RANKINGS_RESPONSE:
		default:
			return false;
	}
};

const rootReducer = combineReducers({
  rankings,
  gettingRankings,
  routing,
});

export default rootReducer;