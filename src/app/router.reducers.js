import AppNavigator from './AppNavigator';

export default (state, action) => {
  console.log('navReducer');
  const newState = AppNavigator.router.getStateForAction(action, state);
  console.log('newState', newState);
  return newState || state;
};
