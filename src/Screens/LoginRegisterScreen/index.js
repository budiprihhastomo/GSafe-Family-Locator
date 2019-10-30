import React from 'react';
import {ImageBackground, StatusBar} from 'react-native';
import {
  Text,
  Tabs,
  Tab,
  View,
  Input,
  Item,
  Label,
  Content,
  Icon,
} from 'native-base';
import Styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LoginTabs = props => (
  <View style={Styles.Content}>
    <View style={Styles.WrapInputBox}>
      <Label style={Styles.LabelInputBox}>Username</Label>
      <Item regular style={Styles.ItemInputBox}>
        <Input style={Styles.InputBox} autoCapitalize="none" />
      </Item>
    </View>
    <View style={Styles.WrapInputBox}>
      <Label style={Styles.LabelInputBox}>Password</Label>
      <Item regular style={Styles.ItemInputBox}>
        <Input secureTextEntry={true} style={Styles.InputBox} />
      </Item>
    </View>
    <View style={Styles.WrapFooter}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => props.navigation.replace('MainScreen')}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#7F00FF', '#E100FF']}
          style={Styles.ButtonLogin}>
          <Text style={Styles.ButtonLoginText}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text style={Styles.ForgetPassword}>Lupa Password?</Text>
      <View style={Styles.Grid} />
      <View style={Styles.WrapIcon}>
        <View style={Styles.Icons}>
          <Icon
            style={[Styles.IconDetail, {color: '#7F00FF'}]}
            name="facebook"
            type="FontAwesome"
          />
        </View>
        <View style={Styles.Icons}>
          <Icon
            style={[Styles.IconDetail, {color: '#E100FF'}]}
            name="google"
            type="FontAwesome"
          />
        </View>
      </View>
    </View>
  </View>
);

const RegisterTabs = props => (
  <View style={Styles.Content}>
    <View style={Styles.WrapInputBox}>
      <Label style={Styles.LabelInputBox}>Username</Label>
      <Item regular style={Styles.ItemInputBox}>
        <Input style={Styles.InputBox} autoCapitalize="none" />
      </Item>
    </View>
    <View style={Styles.WrapInputBox}>
      <Label style={Styles.LabelInputBox}>Nickname</Label>
      <Item regular style={Styles.ItemInputBox}>
        <Input style={Styles.InputBox} />
      </Item>
    </View>
    <View style={Styles.WrapInputBox}>
      <Label style={Styles.LabelInputBox}>Email</Label>
      <Item regular style={Styles.ItemInputBox}>
        <Input
          autoCapitalize="none"
          keyboardType="email-address"
          style={Styles.InputBox}
        />
      </Item>
    </View>
    <View style={Styles.WrapInputBox}>
      <Label style={Styles.LabelInputBox}>Password</Label>
      <Item regular style={Styles.ItemInputBox}>
        <Input secureTextEntry={true} style={Styles.InputBox} />
      </Item>
    </View>
    <View style={Styles.WrapInputBox}>
      <Label style={Styles.LabelInputBox}>Konfirmasi Password</Label>
      <Item regular style={Styles.ItemInputBox}>
        <Input secureTextEntry={true} style={Styles.InputBox} />
      </Item>
    </View>
    <View style={Styles.WrapFooter}>
      <TouchableOpacity activeOpacity={0.6}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#E100FF', '#7F00FF']}
          style={Styles.ButtonLogin}>
          <Text style={Styles.ButtonLoginText}>Daftar</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  </View>
);

const LoginScreen = props => (
  <Content>
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    <View style={Styles.Header}>
      <ImageBackground
        source={require('../../Assets/Logo/GSafeFamily_Logo.png')}
        style={Styles.Logo}
      />
    </View>
    <Tabs style={Styles.Tabs} tabBarUnderlineStyle={Styles.TabUnderlineStyle}>
      <Tab
        heading="Login"
        tabStyle={Styles.TabStyle}
        textStyle={Styles.TextStyle}
        activeTabStyle={Styles.ActiveTabStyle}
        activeTextStyle={Styles.ActiveTextStyle}>
        <LoginTabs {...props} />
        <ImageBackground
          source={require('../../Assets/Images/Login/Bottom_Nav.png')}
          style={Styles.BackgroundLogin}
        />
      </Tab>
      <Tab
        heading="Daftar"
        tabStyle={Styles.TabStyle}
        textStyle={Styles.TextStyle}
        activeTabStyle={Styles.ActiveTabStyle}
        activeTextStyle={Styles.ActiveTextStyle}>
        <RegisterTabs />
        <ImageBackground
          source={require('../../Assets/Images/Login/Bottom_Nav.png')}
          style={Styles.BackgroundLogin}
        />
      </Tab>
    </Tabs>
  </Content>
);

export default LoginScreen;
