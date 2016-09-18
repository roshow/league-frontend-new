import { combineReducers } from 'redux';
import merge from 'lodash/merge';
import { routerReducer as routing } from 'react-router-redux';
import { GET_RANKINGS_REQUEST, GET_RANKINGS_RESPONSE, GET_ALL_PLAYERS_REQUEST, GET_ALL_PLAYERS_RESPONSE } from './../actions/Actions';


function playersList ( state = [], { type, payload = {} } ) {

  switch (type) {
    case GET_ALL_PLAYERS_RESPONSE:
      return [...payload.playersList];

    default:
      return state;
  }

}

const loading = ( state = {}, { type } ) => {
	switch (type) {
    case GET_ALL_PLAYERS_REQUEST:
    case GET_RANKINGS_REQUEST:
      return {
        ...state,
        [type]: true
      };

		case GET_RANKINGS_RESPONSE:
			return {
        ...state,
        [GET_RANKINGS_REQUEST]: false
      };

    default:
      return state;

	}
};

const entitiesInitialState = {
  players: {},
  rankings: {},
  matches: {}
};

function entities ( state = entitiesInitialState, { payload = {} } ) {
  if (payload.entities) {
    return merge({}, state, payload.entities);
  }
  return state;
}


const rootReducer = combineReducers({
  entities,
  playersList,
  loading,
  routing,
});

export default rootReducer;