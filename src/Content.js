import React, { Component } from 'react';
import { ExamplePage } from  './ExamplePage.js'
import { SideNav } from './SideNav.js';

export const Content = () => (
  <div class="container-fluid">
    <div class="row">
      <ExamplePage/>
      <SideNav/>
    </div>
  </div>
)

