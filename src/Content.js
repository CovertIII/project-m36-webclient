import React from 'react';
import { ExamplePage } from  './ExamplePage.js'
import { SideNav } from './SideNav.js';

export const Content = () => (
  <div className="container-fluid">
    <div className="row">
      <ExamplePage/>
      <SideNav/>
    </div>
  </div>
)

