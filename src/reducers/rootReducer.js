import { combineReducers } from 'redux';
import merge from 'lodash/merge';
import { routerReducer as routing } from 'react-router-redux';
import { GET_RANKINGS_REQUEST, GET_RANKINGS_RESPONSE, GET_ALL_PLAYERS_REQUEST } from './../actions/Actions';


const loading = (state={}, { type }) => {
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
  matches: {},
  playerNames: {},
  players: {},
  rankings: {}
};

const entities = (state=entitiesInitialState, { payload={} }) => payload.entities ? merge({}, state, payload.entities) : state;

const listsInitialState = {
  playerList: [],
  matchList: []
};

const lists = (state=listsInitialState, { payload={} }) => payload.lists ? merge({}, state, payload.lists) : state;




const rootReducer = combineReducers({
  entities,
  lists,
  loading,
  routing,
});

export default rootReducer;