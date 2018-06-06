import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native'
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import store from '../store';
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';
import RobotoText from 'native-base/Fonts/Roboto.ttf';
import RobotoMediumText from 'native-base/Fonts/Roboto_medium.ttf';

import {
  createReduxBoundAddListener
} from 'react-navigation-redux-helpers';
import AppNavigator from './AppNavigator';

class App extends Component {
  state = {
    isLoading: false
  };

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: RobotoText,
      Roboto_medium: RobotoMediumText
    });

    this.setState({ isLoading: true });
  }

  render() {

console.log('this.props', this.props);
    const navigation = addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener: createReduxBoundAddListener('root')
        });

    if (this.state.isLoading) {
      return (
        <AppNavigator navigation={navigation} />
      );
    }

    return null
  }
}

const mapStateToProps = state => ({ nav: state.nav.navReducer });

export default connect(mapStateToProps)(App);
