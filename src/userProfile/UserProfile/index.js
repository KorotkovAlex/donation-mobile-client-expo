import React, {Component} from 'react';
import { TouchableOpacity, View } from 'react-native'
import { Card, CardItem, Body, Container, Header, Content, List, ListItem, Text, Footer, FooterTab, Icon, Button } from 'native-base';
import { connect } from 'react-redux';
import {
  compose,
  defaultProps,
  setPropTypes,
  withState,
  withProps,
  withHandlers,
  lifecycle
} from 'recompose';
// import RNFS from 'react-native-fs';

import Helped from '../../helped/Helped'
import Wall from '../../wall/Wall';
import UsersRequest from '../UsersRequest';

const mapStateToProps = ({requestReducer, startPageReducers} ) => ({requestReducer, startPageReducers});

const enhance = compose(
  connect(mapStateToProps),

  withState('privateKey', 'setPrivateKey', ''),
  withState('ether', 'setEther', ''),//getBalance

  withHandlers({
    toSendMoney: ({ navigation }) => () => {
      navigation.navigate('SendMoneyInWallet')
    }
  }),

  lifecycle({
    componentWillMount() {
      this.props.setEther('1451.7546123')
      // const privateKey = this.props.startPageReducers.startPageReducers.privateKey;
      // fetch(`http://192.168.43.15:3000/getbalance`, {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //       privateKey: privateKey,
      //   })
      // }).then((response) => {
      //   this.props.setEther(response._bodyInit)
      // }).catch((error) => {
      //   console.error(error);
      // });
    }
  })
);
//
const UserProfile = ({
  ether,
  navigation,
  toSendMoney
}) => (
  <View style={{flex: 1}}>
    <View style={{flex: 1}}>
      <Card>
        <CardItem>
          <Body>
            <View style={{ alignSelf: "center", margin: 2}}>
              <Text>Количество эфира: {ether}</Text>
            </View>
            <View style={{ alignSelf: "center", margin: 10, paddingBottom: 10}}>
              <TouchableOpacity
                onPress={toSendMoney}
                style={{ alignSelf: "center", backgroundColor: '#42A5F5'}}
              >
                <View style={{paddingVertical: 10, paddingHorizontal: 20}}>
                  <Text style={{color: 'white', alignSelf: "center", fontSize: 15}}> Переслать деньги </Text>
                </View>
              </TouchableOpacity>
            </View>
          </Body>
        </CardItem>
      </Card>
    </View>
    <View style={{flex: 4}}>
      <UsersRequest navigation = {navigation} />
    </View>
  </View>
);

export default enhance(UserProfile);
