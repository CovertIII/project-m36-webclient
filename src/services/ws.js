const uri = 'wss://try.project-m36.io/ws/';

export const ws = {
  io: null,
  listeners: []
};

ws.on = cb => ws.listeners.push(cb);
ws.off = cb => ws.listeners.filter( c => c !== cb);

export const connect = () => new Promise( (res, rej) => {
  ws.io = new WebSocket(uri);
  ws.io.onopen = function(event) {
    ws.io.send("connectdb:test");
    res(event);
  };
  ws.io.onerror = event => {
    rej(event);
  };
  ws.io.onmessage = event => {
    const data = JSON.parse(event.data);
    ws.listeners.forEach( cb => cb(data));
  };
});

export const evaluate = (expr, attr) => new Promise( (res, rej) => {
  ws.io.send('executetutd:' + expr);
  const fn = data => {
    if(data[attr]){
      res(data[attr]);
      ws.off(fn);
    } else if(data.displayerror){
      rej(data.displayerror);
      ws.off(fn);
    }
  };
  ws.on(fn);
});

export const showRelvars = () => evaluate(':showrelvars', 'displayrelation');

export const showExpr = expr => evaluate(':showexpr ' + expr, 'displayrelation');
