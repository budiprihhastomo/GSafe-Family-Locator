import AsyncStorage from '@react-native-community/async-storage';

export const initApp = async () => {
  return await AsyncStorage.setItem('@initApp', 'true');
};

export const checkInit = async () => {
  return await AsyncStorage.getItem('@initApp');
};

export const redirectLoginScreen = (status, navigation) => {
  return status !== 'true'
    ? navigation.replace('SplashScreen')
    : navigation.replace('LoginRegisterScreen');
};
