import Expo from 'expo';

export const isOpened = () => Expo.SecureStore.getItemAsync('isOpened');
