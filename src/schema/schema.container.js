import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map, pathEq, pipe, find, pathOr } from 'ramda';
import { SchemaComponent } from './scheam.component';

const spy = s => i => {
  console.log(s, i);
  return i;
};

const selector = ({route, relvars}) => {
  const selectedRelvarSchema = pipe(
    pathOr([], [1, 'asList']),
    find(pathEq([1, 0, 'val'], route.name)),
    pathOr([[], {asList: []}], [1, 1, 'val'])
  )(relvars);
  return {
    name: route.name,
    relation: selectedRelvarSchema
  };
};

const mapStateToProps = selector;

export const Schema = connect(
  mapStateToProps,
  null
)(SchemaComponent);
