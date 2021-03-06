import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Content: {
    height: 'auto',
    marginTop: 20,
    paddingHorizontal: 30,
  },
  Logo: {
    width: 60,
    height: 60,
  },
  Tabs: {
    elevation: 0,
    height: 'auto',
  },
  TabStyle: {
    backgroundColor: '#fff',
    elevation: 0,
  },
  TextStyle: {
    color: '#95a5a6',
    fontWeight: 'bold',
  },
  TabUnderlineStyle: {
    backgroundColor: '#6c40bd',
  },
  ActiveTabStyle: {
    backgroundColor: '#fff',
  },
  ActiveTextStyle: {
    color: '#000',
    fontWeight: 'bold',
  },
  Header: {
    height: SCREEN_HEIGHT * 0.2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  WrapInputBox: {
    marginVertical: 10,
  },
  ItemInputBox: {
    borderRadius: 5,
    borderColor: '#fff',
    backgroundColor: '#fff',
    elevation: 3,
    paddingHorizontal: 10,
  },
  InputBox: {
    color: '#000',
  },
  LabelInputBox: {
    color: '#95a5a6',
    marginBottom: 10,
  },
  WrapFooter: {
    marginTop: 10,
  },
  ButtonLoginText: {
    color: '#fff',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  ButtonLogin: {
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
  },
  ForgetPassword: {
    color: '#6c40bd',
    fontWeight: 'bold',
    marginTop: 20,
  },
  Grid: {
    borderBottomWidth: 0.6,
    borderBottomColor: '#95a5a6',
    padding: 15,
  },
  WrapIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  Icons: {
    height: 30,
    width: 30,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconDetail: {
    fontSize: 24,
  },
  BackgroundLogin: {
    width: SCREEN_WIDTH,
    height: 210,
    marginTop: 10,
  },
});

export default Styles;

