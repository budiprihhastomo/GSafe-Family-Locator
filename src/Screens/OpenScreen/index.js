import React from 'react';
import {ImageBackground, StatusBar} from 'react-native';
import {View} from 'native-base';
import Styles from './style';
import {checkInit, redirectLoginScreen} from '../../utils/GeneralFunction';

const OpenScreen = () => (
  <View style={Styles.Container}>
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    <ImageBackground
      source={require('../../Assets/Images/Open/Open_4.png')}
      style={Styles.OpenScreen}
    />
  </View>
);

const renderScreen = props => {
  checkInit().then(res => {
    setTimeout(() => redirectLoginScreen(res, props.navigation), 2000);
  });
  return <OpenScreen />;
};

export default renderScreen;
