import React, { Component } from 'react';

import { Relation } from '../Relation';

export const BodyComponent = ({name, relation}) => (
  <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
    <h1>Body of Relation {name}</h1>
    <div className="table-responsive">
      { Relation(relation) }
    </div>
  </main>
);
