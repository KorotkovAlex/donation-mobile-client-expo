import React, {Component} from 'react';
import { Container, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon, Header, Text, List, ListItem, Button } from 'native-base';
import { RefreshControl } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  compose,
  defaultProps,
  setPropTypes,
  withState,
  withProps,
  withHandlers,
  lifecycle
} from 'recompose';

import { addRecepients as addRecepientsAction } from '../request.action'
// const mapDispatchToProps = dispatch => bindActionCreators({ togglePhoto: togglePhotoAction }, dispatch);
import { data } from '../../userProfile/data';

const mapStateToProps = ({requestReducer} ) => ({requestReducer});

const mapDispatchToProps = dispatch => bindActionCreators({ addRecepients: addRecepientsAction }, dispatch);

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),

  withState('users', 'setUsers', []),
  withState('refreshing', 'setRefrehing', false),


  lifecycle({
    componentWillMount() {
      this.props.setUsers(data);
      // fetch(`http://192.168.43.15:3000/getusers`, {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   }
      // }).then((response) => {
      //   console.log('response._bodyInit',response._bodyInit);
      //   const jsonData = JSON.parse(response._bodyInit);
      //   console.log('jsonData',jsonData);
      //
      //   this.props.setUsers(jsonData);
      // }).catch((error) => {
      //   console.error(error);
      // });
    }
  }),

  withHandlers({
    _onRefresh: ({ setUsers, setRefrehing }) => () => {
      setRefrehing(true);
      this.props.setUsers(data);
      // fetch(`http://192.168.43.15:3000/getusers`, {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   }
      // }).then((response) => {
      //   console.log('response._bodyInit',response._bodyInit);
      //   const jsonData = JSON.parse(response._bodyInit);
      //   console.log('jsonData',jsonData);
      //   setUsers(jsonData);
      //   setRefrehing(false);
      // })
    },

    _view: ({ navigation, addRecepients }) => recepient => {
      const newRecipient = {
        privateKeyRecipient: recepient[0],
        title: recepient[1],
        description: recepient[0],
        countNeed: recepient[3],
        countNow: recepient[4]
      }
      addRecepients(recepient)
      const { navigate } = navigation;
      navigate('RequestDetails');
    }
  }),

  withProps(({ users, _view, navigation }) => {

    return {
      people: users.map((data, index) => {
        return (
          <Card key={index}>
            <CardItem>
              <Body>
                <Text
                  style={{ paddingTop: 2 }}
                >
                  Title: {data[1]}
                </Text>
                <Text
                  style={{ paddingTop: 2}}
                >
                  Count need: {data[3]/1000000000000000000} eth
                </Text>
                <Text
                  style={{ paddingTop: 2}}
                >
                  Count now: {data[4]/1000000000000000000} eth
                </Text>
                <Text
                  style={{ paddingTop: 2 }}
                >
                  Descriptin: {data[2]}
                </Text>
                <Button style={{ alignSelf: "center", margin: 10}} onPress={() => _view(data)} block info>
                  <Text>Просмотреть</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        )
      })
    }
  })
);

const RequestCard = ({
  users,
  people,
  _onRefresh,
  refreshing
}) => (
  <Content refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={_onRefresh}
          />
        }>
      {people}
  </Content>
);

export default enhance(RequestCard);
