import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map, pathOr, pipe } from 'ramda';
import { viewRelation } from './route.actions.js';

const Title = (title) => (
  <li className="nav-item">
    <strong>{title}</strong>
  </li>
);

const Item = (title, view, isActive) => (
  <li className="nav-item">
    <a className={'nav-link ' + (isActive ? 'active' : '')} onClick={() => view(title)}>{title}</a>
  </li>
);

const SideNavComponent = ({relvars, viewRelation, selectedName}) => (
  <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
    <ul className="nav nav-pills flex-column">
      { Title('Relvars') }
      { relvars.map( name => Item(name, viewRelation, selectedName === name) ) }
    </ul>

    <ul className="nav nav-pills flex-column">
      { Title('Types') }
    </ul>

    <ul className="nav nav-pills flex-column">
      { Title('Functions') }
    </ul>
  </nav>
);

const mapStateToProps = state => ({
  relvars: pipe(
    pathOr([], ['relvars', 1, 'asList']),
    map(pathOr('', [1, 0, 'val']))
  )(state),
  types: [],
  selectedName: state.route.name
});

const mapDispatchToProps = dispatch => ({
  viewRelation: name => dispatch(viewRelation(name))
});

export const SideNav = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNavComponent);
