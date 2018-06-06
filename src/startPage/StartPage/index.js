import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  NativeRouter,
  Link,
  DeepLinking
} from 'react-router-native';
import {
  Button,
  Container,
  Content,
  Card,
  CardItem,
  Left,
  Right,
  Center,
  Body,
  Thumbnail,
  Spinner,
  Header,
  Text,
  Form,
  Item,
  Label,
  Input
} from 'native-base';
// import RNFS from 'react-native-fs';

import {
  compose,
  defaultProps,
  setPropTypes,
  withState,
  withProps,
  withHandlers,
  lifecycle
} from 'recompose';

import { savePrivatKey as savePrivatKeyAction } from '../startPage.action'


const mapStateToProps = ({ requestReducer, reducer, startPageReducers } ) => ({ requestReducer, reducer, startPageReducers });

const mapDispatchToProps = dispatch => bindActionCreators({ savePrivatKey: savePrivatKeyAction }, dispatch);

const enhance = compose(
  connect(mapStateToProps,mapDispatchToProps),


  withState('login', 'setLogin', ''),
  withState('password', 'setPassword', ''),

  withHandlers({
    _onPressButton: ({ login, password, navigation, savePrivatKey }) => () => {
      const { navigate } = navigation;
      // var path = RNFS.DocumentDirectoryPath + '/test.json';
      navigate('UserProfile');
      // RNFS.readFile(path, 'utf8').then(data => {
      //   const jsonData = JSON.parse(data);
      //   if(password === jsonData.password ) {
      //     console.log("Post");
      //     fetch(`http://192.168.43.15:3000/login`, {
      //       method: 'POST',
      //       headers: {
      //         'Accept': 'application/json',
      //         'Content-Type': 'application/json',
      //       },
      //       body: JSON.stringify({
      //           privateKey: jsonData.privateKey,
      //           password: jsonData.password,
      //       })
      //     }).then((response) => {
      //       if (response._bodyInit) {
      //         savePrivatKey(jsonData.privateKey);

          //   } else {
          //     console.error(error);
          //   }
          // }).catch((error) => {
          //   console.error(error);
          // });
      //   }
      //   console.log('jsonData', );
      // });
    },

    _onPressSignup: ({ login, password, navigation }) => () => {
      const { navigate } = navigation;
      navigate('UserProfile');
      // fetch(`http://192.168.43.15:3000/signup`, {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //       password: password,
      //   })
      // }).then((response) => {
      //   console.log('response.body', response._bodyInit);
      //   var path = RNFS.DocumentDirectoryPath + '/test.json';
      //   RNFS.writeFile(path, response._bodyInit, 'utf8')
      //   .then((success) => {
      //     console.log('FILE WRITTEN!', RNFS.DocumentDirectoryPath + '/test.json');
      //   })
      //   .catch((err) => {
      //     console.log(err.message);
      //   });
      // }).catch((error) => {
      //   console.error(error);
      // });
    },

    _testButton: () => () => {
      // var path = RNFS.DocumentDirectoryPath + '/test.json';
      // RNFS.writeFile(path, '{ "password": "1234", "privateKey": "0x8a84331220Db20A067D571EE950F881F98b7BD43"}', 'utf8')
      //   .then((success) => {
      //     console.log('FILE WRITTEN!', RNFS.DocumentDirectoryPath + '/test.json');
      //   })
      //   .catch((err) => {
      //     console.log(err.message);
      //   });
      //
      // RNFS.readFile(path, 'utf8').then(data => {
      //   const jsonData = JSON.parse(data);
      //   console.log('jsonData', jsonData.password);
      // });
    }
  })
);

const StartPage = ({
  _testButton,
  _onPressSignup,
  _onPressButton,
  setPassword,
  password
}) => (
  <View style={{ flex: 1, backgroundColor: '#42A5F5'}}>
    <View style={{
        flex:1,justifyContent: 'center'
      }}>
      <Icon name="handshake-o" size={100} style={{ alignSelf: "center"}} color="white" />
      <Item style={{ alignSelf: "center", width: 300, margin: 10, marginTop: 40}}>
        <TextInput
          style={{ alignSelf: "center", width: 300, color: 'white', fontSize: 20}}
          selectionColor='white'
          secureTextEntry={true}
          value={password}
          placeholder='Пароль'
          placeholderTextColor="white"
          onChangeText={(password) => setPassword(password)}
          underlineColorAndroid='white'
        />
      </Item>
      <View>
        <TouchableOpacity
          onPress={() => _onPressButton()}
          style={{ alignSelf: "center", width: 300, margin: 10, backgroundColor: '#1E88E5'}}
        >
          <View style={{paddingVertical: 10, paddingHorizontal: 20}}>
            <Text style={{color: 'white', alignSelf: "center", fontSize: 20}}> Войти </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
   </View>
);

export default enhance(StartPage);
