import { pipeP, cond, test, is } from 'ramda';
import {
  connect,
  showRelvars,
  showTypes,
  showExpr,
  evaluate as evaluateTutD
} from './services/ws.js';

export const init = () => dispatch => pipeP(
  connect,
  () => dispatch(getRelvarsAndTypes())
)();

export const getRelvarsAndTypes = () => dispatch => pipeP(
  showRelvars,
  data => dispatch({type: 'SHOW_RELVARS', payload: data}),
  showTypes,
  data => dispatch({type: 'SHOW_TYPES', payload: data}),
)();

export const getRelvar = name => dispatch => pipeP(
  showExpr,
  data => dispatch({type: 'SHOW_RELVAR', payload: {data, name}})
)(name);

export const evaluate = expr => dispatch => pipeP(
  expr => evaluateTutD(expr),
  data => dispatch({type: 'CONSOLE_RESULT', payload: {data, expr}}),
  () => dispatch(getRelvarsAndTypes())
)(expr).catch( e => {
  console.error(e);
  dispatch({type: 'CONSOLE_ERROR', payload: {data: e, expr}})
});


export const consoleChange = expr => ({
  type: 'CONSOLE_CHANGE',
  payload: expr
});


