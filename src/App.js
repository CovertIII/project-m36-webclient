import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Header } from './Header';
import { Content } from './Content';
import './dashboard.css';
import { connect, showRelvars } from './services/ws.js';

const AppTemplate = () => ([
  <Header/>,
  <Content/>
]);

class App extends Component {
  componentDidMount(){
    connect().then( () => showRelvars()).then( data => console.log(data));
  }
  render(){
    return AppTemplate();
  }
}


export default App;
