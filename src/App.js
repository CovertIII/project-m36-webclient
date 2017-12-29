import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import { Header } from './Header';
import { Content } from './Content';

import { init } from './init.actions';
import './dashboard.css';

const AppTemplate = () => ([
  <Header key="header"/>,
  <Content key="content"/>
]);

class AppComponent extends Component {
  componentDidMount(){
    this.props.init();
  }
  render(){
    return AppTemplate();
  }
}

export const mapDispatchToProps = dispatch => ({
  init: () => dispatch(init())
});

const App = connect(null, mapDispatchToProps)(AppComponent);


export default App;
