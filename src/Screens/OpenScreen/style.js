import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  OpenScreen: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Styles;
