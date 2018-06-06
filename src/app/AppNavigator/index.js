import { StackNavigator as stackNavigator } from 'react-navigation';


import RequestCard from '../../requests/RequestCard'
import RequestDetails from '../../requests/RequestDetails'
import Wall from '../../wall/Wall'
import StartPage from '../../startPage/StartPage'
import Helped from '../../helped/Helped'
import TabNavigator from '../TabNavigator';
import SendMoneyInWallet from '../../sendMoneyInWallet/SendMoneyInWallet';
import Widget from '../../sendMoneyInWallet/Widget';

const headerStyle = { backgroundColor: '#42A5F5' };
const headerTitleStyle = { color: 'white' };

const AppNavigator = stackNavigator({
    StartPage: {
      screen: StartPage,
      navigationOptions: {
        header: null
      }
    },
    RequestDetails: {
      screen: RequestDetails,
      navigationOptions: {
        title: 'Расширенная информация',
        headerStyle,
        headerTitleStyle,
        headerTintColor: 'white'
      }
    },
    SendMoneyInWallet: {
      screen: SendMoneyInWallet,
      navigationOptions: {
        title: 'Перечислить деньги в кошелек',
        headerStyle,
        headerTitleStyle,
        headerTintColor: 'white'
      }
    },
    Widget: {
      screen: Widget,
      navigationOptions: {
        title: 'Перечислить деньги в кошелек',
        headerStyle,
        headerTitleStyle,
        headerTintColor: 'white'

      }
    },
    TabNavigator: {
      screen: TabNavigator
    }
  });

export default AppNavigator;
