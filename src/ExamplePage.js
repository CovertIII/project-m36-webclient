import React, { Component } from 'react';
import { connect } from 'react-redux';
import { T, cond, equals, prop } from 'ramda';

import { Schema } from './schema/schema.container';

export const Empty = () => (
  <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
    <div>Not found</div>
  </main>
);

export const Console = () => (
  <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
    <div>TutorialD Console</div>
  </main>
);

export const Body = () => (
  <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
    <div>Body</div>
  </main>
);

const PageContainer = ({tab}) => cond([
  [ equals('header'), () => <Schema/> ],
  [ equals('tutd'), () => <Console/> ],
  [ equals('body'), () => <Body/> ],
  [ T, () => <Empty/> ]
])(tab);

const mapStateToProps = state => state.route;

export const ExamplePage = connect(mapStateToProps, null)(PageContainer);
