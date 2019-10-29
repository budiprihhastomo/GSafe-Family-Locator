import React from 'react';
import {ImageBackground} from 'react-native';
import {View} from 'native-base';
import Styles from './style';

const OpenScreen = () => (
  <View style={Styles.Container}>
    <ImageBackground
      source={require('../../Assets/Images/Open/Open_4.png')}
      style={Styles.OpenScreen}
    />
  </View>
);

const renderScreen = props => {
  setTimeout(() => props.navigation.navigate('SplashScreen'), 2000);
  return <OpenScreen />;
};

export default renderScreen;
