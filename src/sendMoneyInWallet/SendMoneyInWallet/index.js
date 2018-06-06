import React, {Component} from 'react';
import {Button, Input, Container, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon, Header, Text, Item  } from 'native-base';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Linking } from 'react-native';
import {
  compose,
  defaultProps,
  setPropTypes,
  withState,
  withProps,
  withHandlers,
  lifecycle
} from 'recompose';

const mapStateToProps = ({requestReducer, startPageReducers} ) => ({requestReducer, startPageReducers});

const enhance = compose(
  connect(mapStateToProps),

  withState('amount', 'setAmount', ''),

  withHandlers({
    openLink: ({ amount, navigation }) => () => {
      navigation.navigate('Widget', {link: `https://buy.coinbase.com/widget?code=394ccae0-eeaa-56bc-83d3-bca888625ac3&amount=${amount}&address=&currency=RUB&crypto_currency=ETH`})
      // Linking.openURL();
    },

  })
);

const SendMoneyInWallet = ({
  openLink,
  amount,
  setAmount
}) => (
  <Container>
    <Content>
      <Item style={{ alignSelf: "center", width: 300, margin: 10}}>
        <Input
          style={{ alignSelf: "center", width: 300, margin: 2}}
          placeholder="Колличество"
          onChangeText={amount => setAmount(amount)}
        />
      </Item>
      <View style={{ alignSelf: "center", width: 300,}}>
        <TouchableOpacity
          onPress={() => openLink()}
          style={{ alignSelf: "center", margin: 10, backgroundColor: '#42A5F5'}}
        >
          <View style={{paddingVertical: 10, paddingHorizontal: 20}}>
            <Text style={{color: 'white', alignSelf: "center", fontSize: 18}}> Продолжить </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Content>
  </Container>
);

export default enhance(SendMoneyInWallet);
