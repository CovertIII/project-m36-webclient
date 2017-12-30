import { combineReducers } from 'redux';
import { merge, cond, append, is } from 'ramda';

const relvars = (state = [], action) => {
  switch(action.type){
    case 'SHOW_RELVARS':
      return action.payload;
    default:
      return state;
  }
};

const types = (state = [], action) => {
  switch(action.type){
    case 'SHOW_TYPES':
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

const relvarBodies = (state = {}, action) => {
  switch(action.type){
    case 'SHOW_RELVAR':
      return merge(
        state,
        { [action.payload.name]: action.payload.data }
      );
    default:
      return state;
  }
};

const findResultType = expr => cond([
  [ is(Array), () => 'relation' ],
  [ () => true, () => 'string' ]
])(expr);

const initConsoleState = {
  expr: '',
  history: [
    ':showtypes',
    ':showrelvars',
    ':constraints',
    ':showexpr true',
    ':showexpr false',
    ':importexample date',
    ':showexpr s join sp',
    'update s where city="Paris" (status:=10)',
    ':showexpr s',
    ':commit',
    ':showgraph',
  ],
  result: '',
  resultType: 'string'
};

const tconsole = (state = initConsoleState, action) => {
  switch(action.type){
    case 'CONSOLE_CHANGE':
      return merge(
        state,
        { expr: action.payload  }
      );
    case 'CONSOLE_RESULT':
      return merge(
        state,
        {
          result: action.payload.data,
          resultType: findResultType(action.payload.data),
          history: append(action.payload.expr, state.history)
        }
      );
    case 'CONSOLE_ERROR':
      return merge(
        state,
        { result: action.payload.data, resultType: 'string' }
      );
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  relvars,
  types,
  route,
  relvarBodies,
  tconsole
});
