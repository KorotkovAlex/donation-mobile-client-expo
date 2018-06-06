import React, {Component} from 'react';
import { connect } from 'react-redux';
import { WebView } from 'react-native';
import {
  compose,
  defaultProps,
  setPropTypes,
  withState,
  withProps,
  withHandlers,
  lifecycle
} from 'recompose';


const Widget = ({link, navigation}) => (
  <WebView source={{uri: navigation.state.params.link }} />
);

export default Widget;
