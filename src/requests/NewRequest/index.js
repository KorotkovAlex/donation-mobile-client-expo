import React, {Component} from 'react';
import {Button, Input, Container, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon, Header, Text, Item  } from 'native-base';
import { connect } from 'react-redux';
import { View, TouchableOpacity } from 'react-native';
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

  withState('title', 'setTitle', ''),
  withState('description', 'setDescription', ''),
  withState('count', 'setCount', 0),
  withState('countNow', 'setCountNow', 0),
  withState('password', 'setPassword', 0),

  withHandlers({
    _createRequest: ({ startPageReducers, password, title, description, count, countNow, navigation }) => () => {
      console.log('_createRequest', title, description, count, countNow);
      // const privateKey = startPageReducers.startPageReducers.privateKey;
      // fetch(`http://192.168.43.15:3000/adduser`, {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     password: password,
      //     from: privateKey,
      //     title: title,
      //     description: description,
      //     count: count,
      //     countNow: countNow
      //   })
      // }).then((response) => {
      //   const { navigate } = navigation;
      //   navigate('Profile');
      // }).catch((error) => {
      //   console.error(error);
      // });
    },

  })
);

const NewRequest = ({
  _createRequest,
  setCount,
  setCountNow,
  setTitle,
  setDescription,
  setPassword,
  navigation
}) => (
  <Container>
    <Content>
      <Item style={{ alignSelf: "center", width: 300, margin: 10}}>
        <Input
          style={{ alignSelf: "center", width: 300, margin: 2}}
          placeholder="Название"
          onChangeText={(title) => setTitle(title)}
        />
      </Item>
      <Item style={{ alignSelf: "center", width: 300, margin: 10}}>
        <Input
          style={{ alignSelf: "center", width: 300, margin: 2}}
          placeholder="Описание"
          multiline = {true}
          numberOfLines = {4}
          onChangeText={(description) => setDescription(description)}
        />
      </Item>
      <Item style={{ alignSelf: "center", width: 300, margin: 10}}>
        <Input
          style={{ alignSelf: "center", width: 300, margin: 2}}
          placeholder="Нужное количество финансов"
          onChangeText={(count) => setCount(count)}
        />
      </Item>
      <Item style={{ alignSelf: "center", width: 300, margin: 10}}>
        <Input
          style={{ alignSelf: "center", width: 300, margin: 2}}
          placeholder="Текущее количество финансов"
          onChangeText={(countNow) => setCountNow(countNow)}
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
          onPress={() => _createRequest()}
          style={{ alignSelf: "center", margin: 10, backgroundColor: '#42A5F5' }}
        >
          <View style={{paddingVertical: 10, paddingHorizontal: 20}}>
            <Text style={{color: 'white', alignSelf: "center", fontSize: 18}}> Создать </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Content>
  </Container>
);

export default enhance(NewRequest);
