import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Header } from './Header';
import { Content } from './Content';
import './dashboard.css';

const App = () => ([
  <Header/>,
  <Content/>
]);


export default App;
