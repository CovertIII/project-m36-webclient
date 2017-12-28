import { pipeP } from 'ramda';
import { connect, showRelvars } from './services/ws.js';

export const init = () => dispatch => pipeP(
  connect,
  showRelvars,
  data => dispatch({type: 'SHOW_RELVARS', payload: data})
)();

