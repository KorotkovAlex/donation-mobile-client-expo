import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

export default class Wall extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ alignSelf: "center", margin: 2}}>
        <Text>Private Key: X01234</Text>
        <Text>Count Ether: 1234</Text>
      </View>
    );
  }
}
