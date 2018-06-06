import React, {Component} from 'react';
import { Container, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon, Header, Text, List, ListItem, Button } from 'native-base';
import { RefreshControl, View, FlatList, TouchableOpacity } from 'react-native'
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
import { data } from '../data';
import { addRecepients as addRecepientsAction } from '../../requests/request.action';
const mapDispatchToProps = dispatch => bindActionCreators({ addRecepients: addRecepientsAction }, dispatch);

const mapStateToProps = ({requestReducer, startPageReducers} ) => ({requestReducer, startPageReducers});

const enhance = compose(
  connect(mapStateToProps,mapDispatchToProps),

  withState('usersRequest', 'setUsersRequest', []),
  withState('refreshing', 'setRefrehing', false),


  lifecycle({
    componentWillMount() {
      this.props.setUsersRequest(data);
      // const privateKey = this.props.startPageReducers.startPageReducers.privateKey;
      // fetch(`http://192.168.43.15:3000/getusersbykey`, {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     privateKey: privateKey
      //   })
      // }).then((response) => {
      //   console.log('response._bodyInit', response);
      //   const jsonData = JSON.parse(response._bodyInit);
      //   this.props.setUsersRequest(jsonData);
      // }).catch((error) => {
      //   console.error(error);
      // });
    }
  }),

  withHandlers({
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

  withProps(({ usersRequest, _view, navigation }) => {
    console.log('usersRequest', usersRequest);
    return {
      people: (
        <FlatList
          data={usersRequest}
          renderItem={data => (
            <Card key={data.item.id} style={{flex: 1}}>
                <CardItem key={data.item.id}>
                  <Body>
                    <View>
                      <Text style={{ paddingTop: 2 }}> Название: {data.item[1]} </Text>
                    </View>
                    <View>
                      <Text style={{ paddingTop: 2}} >
                        Сколько нужно:{data.item[3]/1000000000000000000}eth
                        {data.item.id}
                      </Text>
                    </View>
                    <View>
                      <Text style={{ paddingTop: 2}}>
                        Сколько собрал: {data.item[4]/1000000000000000000} eth
                      </Text>
                    </View>
                    <View>
                      <Text style={{ paddingTop: 2 }}>
                        Описание: {data.item[2]}
                      </Text>
                    </View>
                    <View style={{ alignSelf: "center"}}>
                      <TouchableOpacity
                        onPress={() => _view(data.item)}
                        style={{ alignSelf: "center", margin: 10, backgroundColor: '#42A5F5'}}
                      >
                        <View style={{paddingVertical: 10, paddingHorizontal: 20}}>
                          <Text style={{color: 'white', alignSelf: "center", fontSize: 13}}> Просмотреть </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </Body>
                </CardItem>
              </Card>
            )}
          keyExtractor={data => {
            console.log('data', data.id);
            return data.id.toString()
          }}
        />
      )
    }
  })
);

const RequestCard = ({
  users,
  people,
  _onRefresh,
  refreshing
}) => (
  <View style={{flex: 1}}>
      {people}
  </View>
);

export default enhance(RequestCard);
