import { pipeP } from 'ramda';
import {
  connect,
  showRelvars,
  showExpr
} from './services/ws.js';

export const init = () => dispatch => pipeP(
  connect,
  showRelvars,
  data => dispatch({type: 'SHOW_RELVARS', payload: data})
)();

export const getRelvar = name => dispatch => pipeP(
  showExpr,
  data => dispatch({type: 'SHOW_RELVAR', payload: {data, name}})
)(name);


