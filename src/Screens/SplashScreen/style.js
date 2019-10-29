import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const WIDTH = SCREEN_WIDTH;
export const HEIGHT = SCREEN_HEIGHT;

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  SplashScreen: {
    height: HEIGHT * 0.9,
    width: WIDTH + 1,
  },
  BackgroundImage: {
    position: 'absolute',
  },
  Initial: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  Header: {
    flex: 1,
  },
  Content: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 150,
  },
  MainTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3f3c55',
  },
  SubTitle: {
    fontSize: 14,
    marginTop: 10,
    color: '#3f3c45',
  },
  ButtonSkip: {
    position: 'absolute',
    right: 0,
    margin: 15,
  },
  ButtonSkipText: {
    color: '#fff',
  },
  FooterSection: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 5,
  },
  ButtonNavPrev: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 50,
    marginHorizontal: 10,
  },
  ButtonNavNext: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#6c40bd',
    marginHorizontal: 10,
  },
  ButtonNavPrevText: {
    color: '#6c40bd',
  },
  ButtonLogin: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#6c40bd',
    marginHorizontal: 10,
  },
  ButtonRegister: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#fff',
    marginHorizontal: 10,
  },
  ButtonRegisterText: {
    color: '#6c40bd',
  },
  Swiper: {
    height: HEIGHT - 25,
  },
});

export default Styles;
