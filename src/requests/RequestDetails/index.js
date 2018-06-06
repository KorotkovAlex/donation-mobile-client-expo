import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon, Header, Text, Button, Input, Item, Label} from 'native-base';
import { connect } from 'react-redux';
import { View, TouchableOpacity } from 'react-native'
import {
  compose,
  defaultProps,
  setPropTypes,
  withState,
  withProps,
  withHandlers,
  lifecycle
} from 'recompose';
// import RequestCard from '../RequestCard'

const mapStateToProps = ({requestReducer, startPageReducers} ) => ({requestReducer, startPageReducers});

const enhance = compose(
  connect(mapStateToProps),

  withState('count', 'setCount', ''),
  withState('password', 'setPassword', ''),

  withHandlers({
    _send: ({ password, count, setUsers, setRefrehing, startPageReducers, requestReducer, navigation }) => () => {
      // const recipient = requestReducer.requestReducer.recipient;
      // const privateKey = startPageReducers.startPageReducers.privateKey;
      // fetch(`http://192.168.43.15:3000/addSender`, {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //       to: recipient[0],
      //       from: privateKey,
      //       count: count*1000000000000000000,
      //       password: password
      //   })
      // }).then((response) => {
      //   const { navigate } = navigation;
      //   navigate('Profile');
      // })
    }
  }),

  withProps(({ setPassword, requestReducer, _send, setCount }) => {
    return {
      details: (
        <Card>
          <Text style={{ alignSelf: "center", marginTop: 2}}>
            Название
          </Text>
          <Text>
            {requestReducer.requestReducer.recipient[1]}
          </Text>
          <Text> Текущее количество {requestReducer.requestReducer.recipient[4]} </Text>
          <Text> Нужное количество {requestReducer.requestReducer.recipient[3]} </Text>
          <Text  style={{ alignSelf: "center", marginTop: 2}}>
            Описание
          </Text>
          <Text>{requestReducer.requestReducer.recipient[2]}</Text>
          <Item style={{ alignSelf: "center", width: 300, margin: 2}}>
            <Input
              style={{ alignSelf: "center", width: 300, margin: 2}}
              placeholder='Количество'
              onChangeText={(count) => setCount(count)}
            />
          </Item>
          <Item style={{ alignSelf: "center", width: 300, margin: 10}}>
            <Input secureTextEntry={true}
              style={{ alignSelf: "center", width: 300, margin: 2}}
              placeholder="Пароль"
              onChangeText={(password) => setPassword(password)}
            />
          </Item>
          <View style={{ alignSelf: "center", width: 300,}}>
            <TouchableOpacity
              onPress={() => _send()}
              style={{ alignSelf: "center", margin: 10, backgroundColor: '#42A5F5'}}
            >
              <View style={{paddingVertical: 10, paddingHorizontal: 20}}>
                <Text style={{color: 'white', alignSelf: "center", fontSize: 18}}> Инвестировать </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Card>
      )
    }
  })
);

const RequestDetails = ({
  navigation,
  details
}) => (
  <Container>
    <Content style={{flex: 1}}>
      {details}
    </Content>
  </Container>
);

export default enhance(RequestDetails);
