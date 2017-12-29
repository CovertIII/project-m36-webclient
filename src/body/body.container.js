import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map, pathEq, pipe, find, propOr } from 'ramda';
import { BodyComponent } from './body.componenet';
import { getRelvar } from '../init.actions';

class BodyClass extends Component {
  componentDidMount(){
    this.props.getRelvar(this.props.name);
  }
  componentWillReceiveProps(nextProps){
    console.log('will get props', this.props, nextProps);
    if(nextProps.name !== this.props.name){
      this.props.getRelvar(nextProps.name);
    }
  }
  render(){
    return BodyComponent(this.props);
  }
}

const emptyRelation = [[], {asList: []}];

const selector = ({route, relvarBodies}) => {
  return {
    name: route.name,
    relation: propOr(emptyRelation, route.name, relvarBodies)
  };
};

const mapStateToProps = selector;
const mapDispatchToProps = dispatch => ({
  getRelvar: name => dispatch(getRelvar(name))
});

export const Body = connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyClass);
