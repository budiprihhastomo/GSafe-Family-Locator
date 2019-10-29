import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Import : Screen
import OpenScreen from './Screens/OpenScreen/index';
import SplashScreen from './Screens/SplashScreen/index';
import LoginRegisterScreen from './Screens/LoginRegisterScreen/index';

const Navigation = createStackNavigator(
  {
    OpenScreen,
    SplashScreen,
    LoginRegisterScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'OpenScreen',
  },
);

export default createAppContainer(Navigation);
