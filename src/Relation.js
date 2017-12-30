import React, { Component } from 'react';
import { cond, pipe, prop, pathEq } from 'ramda';

const emptyRelation = [[], {asList: []}];

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

const Atom = ({atom}) => (
  <span>{
    cond([
      [ pathEq(['type', 'tag'], 'RelationAtomType'), pipe(prop('val'), Relation) ],
      [
        pathEq(['type', 'tag'], 'ConstructedAtomType'),
        atom => (
          <span>
            <span>{atom.dataconstructorname} </span>
            { atom.atomlist.map( a => <Atom atom={a}/> ) }
          </span>
        )
      ],
      [ () => true, prop('val') ]
    ])(atom)
  }</span>
)

const RelationBodyRow = row => (
  <tr>
    { row[1].map( a => (<td><Atom atom={a}/></td>)) }
  </tr>
);

const RelationBody = ({ asList: rows })  => (
  <tbody>
    { rows.map(RelationBodyRow) }
  </tbody>
);

export const Relation = (relation = emptyRelation) => (
  <table className="table table-striped">
    { RelationHeader(relation[0]) }
    { RelationBody(relation[1]) }
  </table>
);
