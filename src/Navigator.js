import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Import : Screen
import OpenScreen from './Screens/OpenScreen/index';
import SplashScreen from './Screens/SplashScreen/index';

const Navigation = createStackNavigator(
  {
    OpenScreen,
    SplashScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'OpenScreen',
  },
);

export default createAppContainer(Navigation);
