import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

function rankings ( state=[], { type, rankings }={} ) {
	switch (type) {
		case 'GET_RANKINGS_RESPONSE':
			return [...rankings];

		default:
			return state;
	}
}

const rootReducer = combineReducers({
  rankings,
  routing,
});

export default rootReducer;