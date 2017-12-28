import React, { Component } from 'react';
import { ifElse, pipe, prop, pathEq } from 'ramda';

const AtomType = attr => {
  const atomType = attr[1]['tag'];
  const attrName = attr[0];
  return (
    <span>{attrName}::{atomType}</span>
  );
};

const RelationHeader = header => (
  <thead>
    <tr>
      { header.map( ht => (<th> {AtomType(ht)} </th>) ) }
    </tr>
  </thead>
)

const Atom = (atom) => (
  <span>{
    ifElse(
      pathEq(['type', 'tag'], 'RelationAtomType'),
      pipe(prop('val'), Relation),
      prop('val')
    )(atom)
  }</span>
)

const RelationBodyRow = row => (
  <tr>
    { row[1].map( a => (<td> {Atom(a)}</td>)) }
  </tr>
);

const RelationBody = ({ asList: rows })  => (
  <tbody>
    { rows.map(RelationBodyRow) }
  </tbody>
);

export const Relation = (relation) => {
  console.log(relation);
  return (
    <table className="table table-striped">
      { RelationHeader(relation[0]) }
      { RelationBody(relation[1]) }
    </table>
  )
};
