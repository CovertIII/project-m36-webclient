import { combineReducers } from 'redux';
import { merge } from 'ramda';

const relvars = (state = [], action) => {
  switch(action.type){
    case 'SHOW_RELVARS':
      return action.payload;
    default:
      return state;
  }
};

const initRoute = {
  type: '',
  name: '',
  tab: 'tutd'
};
const route = (state = initRoute, action) => {
  switch(action.type){
    case 'ROUTE_REPLACE':
      return action.payload;
    case 'ROUTE_PATCH':
      return merge(state, action.payload);
    case 'ROUTE_CHANGE_TAB':
      return merge(state, { tab: action.payload});
    case 'ROUTE_CHANGE_NAME':
      return merge(state, { name: action.payload});
    case 'ROUTE_CHANGE_THING':
      return merge(state, { name: action.payload});
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  relvars,
  route
});
