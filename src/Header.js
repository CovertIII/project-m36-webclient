import React from 'react';
import { connect } from 'react-redux';
import { switchTab } from './route.actions.js';

const tabs = [
  { id: 'header', name: 'Header' },
  { id: 'body', name: 'Body' },
  { id: 'tutd', name: 'TutD' },
];

const Link = ({title, isActive, onClick}) => (
  <li className={'nav-item ' + (isActive ? 'active' : '')  }>
    <a className="nav-link" onClick={onClick}>{title}</a>
  </li>
);

export const HeaderComponent = ({switchTab, tab}) => (
  <header>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="">Project M36 Client</a>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          {
            tabs.map( ({id, name}) => (
              <Link key={id} title={name} isActive={tab === id} onClick={() => switchTab(id)}/>
            ))
          }
        </ul>
      </div>
    </nav>
  </header>
);

const mapDispatchToProps = dispatch => ({
  switchTab: tab => dispatch(switchTab(tab))
});

export const Header = connect(
  state => state.route,
  mapDispatchToProps
)(HeaderComponent);
