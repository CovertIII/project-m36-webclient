import React from 'react';
import { connect } from 'react-redux';
import { map, pathOr, pipe } from 'ramda';
import { viewRelation, viewType } from './route.actions.js';

const Title = (title) => (
  <li className="nav-item">
    <strong>{title}</strong>
  </li>
);

const Item = (title, view, isActive) => (
  <li key={title} className="nav-item">
    <a className={'nav-link ' + (isActive ? 'active' : '')} onClick={() => view(title)}>{title}</a>
  </li>
);

const SideNavComponent = ({types, relvars, viewRelation, selectedName, viewType}) => (
  <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
    <ul className="nav nav-pills flex-column">
      { Title('Relvars') }
      { relvars.map( name => Item(name, viewRelation, selectedName === name) ) }
    </ul>

    <ul className="nav nav-pills flex-column">
      { Title('Types') }
      { types.map( name => Item(name, viewType, selectedName === name) ) }
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
  types: pipe(
    pathOr([], ['types', 1, 'asList']),
    map(pathOr('', [1, 0, 'val']))
  )(state),
  selectedName: state.route.name
});

const mapDispatchToProps = dispatch => ({
  viewRelation: name => dispatch(viewRelation(name)),
  viewType: name => dispatch(viewType(name))
});

export const SideNav = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNavComponent);
