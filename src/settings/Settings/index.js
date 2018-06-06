import React, {Component} from 'react';
import {Button, Input, Container, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon, Header, Text, Item  } from 'native-base';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { View, TouchableOpacity, Switch } from 'react-native';
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

  withState('language', 'setLanguage', false),

  withHandlers({
    openLink: ({ amount, navigation }) => () => {
      navigation.navigate('Widget', {link: `https://buy.coinbase.com/widget?code=394ccae0-eeaa-56bc-83d3-bca888625ac3&amount=${amount}&address=&currency=RUB&crypto_currency=ETH`})
    },

  })
);

// <RadioForm
//   radio_props={[{label: 'param1', value: 0 }]}
//   initial={0}
//   onPress={(value) => {this.setState({value:value})}}
// />
const Setting = ({
  openLink,
  amount,
  setAmount,
  setLanguage,
  language
}) => (
  <Container>
    <Content>
      <View>
        <View
          style={{
            width: '100%',
            borderBottomWidth: 1,
            borderBottomColor: '#BDBDBD',
            backgroundColor: 'white'
          }}
        >
          <View style={{
            marginVertical: 20,
            marginHorizontal: 2,
            alignItems: 'center'
          }}>
            <Text style={{fontSize: 18}}>
              Номер кошелька:
            </Text>
            <View>
              <Text style={{alignSelf: "center", fontSize: 15}}> 0xe92755a10d15f2d5a34b53caf42d0a225bb1b5f4 </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            borderBottomWidth: 1,
            borderBottomColor: '#BDBDBD',
            backgroundColor: 'white'
          }}
        >
          <View style={{
            marginVertical: 20,
            marginHorizontal: 2,
            alignItems: 'center'
          }}>
            <Text style={{fontSize: 18}}>
              Количество эфира:
            </Text>
            <View>
              <Text style={{alignSelf: "center", fontSize: 15}}> 1451.7546123 </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            borderBottomWidth: 1,
            borderBottomColor: '#BDBDBD',
            backgroundColor: 'white'
          }}
        >
          <View style={{
            marginVertical: 20,
            marginHorizontal: 2,
            alignItems: 'center'
          }}>
            <Text style={{fontSize: 18}}>
              Язык:
            </Text>
            <View>
              <Text style={{alignSelf: "center", fontSize: 15}}> Русский </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            borderBottomWidth: 1,
            borderBottomColor: '#BDBDBD',
            backgroundColor: 'white'
          }}
        >
          <View style={{
            marginVertical: 20,
            marginHorizontal: 2,
            alignItems: 'center'
          }}>
            <Text style={{fontSize: 18}}>
              Выйти
            </Text>
          </View>
        </View>
      </View>
    </Content>
  </Container>
);

export default enhance(Setting);
