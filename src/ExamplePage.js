import React, { Component } from 'react';
import { connect } from 'react-redux';
import { T, cond, equals, prop } from 'ramda';

import { Schema } from './schema/schema.container';
import { Body } from './body/body.container';
import { Console } from './console/console.container';

export const Empty = () => (
  <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
    <div>Not found</div>
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
