import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map, pathEq, pipe, find, propOr } from 'ramda';
import { ConsoleComponent } from './console.component';
import { evaluate, consoleChange } from '../init.actions';

const mapStateToProps = state => state.tconsole;

const mapDispatchToProps = dispatch => ({
  evaluate: expr => dispatch(evaluate(expr)),
  updateInput: e => dispatch(consoleChange(e.target.value))
});

export const Console = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConsoleComponent);
