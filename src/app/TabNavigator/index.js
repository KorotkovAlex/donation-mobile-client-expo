import { TabNavigator as tabNavigator } from 'react-navigation';

import UserProfile from '../../userProfile/UserProfile'
import Requests from '../../requests/Requests'
import NewRequest from '../../requests/NewRequest'
import Settings from '../../settings/Settings'

const headerStyle = { backgroundColor: '#42A5F5' };
const headerTitleStyle = { color: 'white', fontWeight: '100' };

export default tabNavigator({
  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      headerStyle,
      headerTitleStyle,
      tabBarLabel: 'История',
      headerTitle: 'История',
      headerLeft: null
    }
  },
  NewRequest: {
    screen: NewRequest,
    navigationOptions: {
      headerStyle,
      headerTitleStyle,
      tabBarLabel: 'Создать',
      headerTitle: 'Создать',
      headerLeft: null
    }
  },
  Requests: {
    screen: Requests,
    navigationOptions: {
      headerStyle,
      headerTitleStyle,
      tabBarLabel: 'Список кампаний',
      headerTitle: 'Кампании',
      headerLeft: null
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Профиль',
      headerStyle,
      headerTitleStyle,
      headerTintColor: 'white'
    }
  }
}, {
  tabBarOptions: {
    style: {
      backgroundColor: '#42A5F5'
    },
    labelStyle: {
      fontSize: 12
    },
  },
  animationEnabled: false,
  swipeEnabled: false,
  tabBarPosition: 'top'
});
