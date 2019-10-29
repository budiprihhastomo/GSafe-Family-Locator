import React, {useState} from 'react';
import {ImageBackground, StatusBar} from 'react-native';
import {Content, View, Text, Button} from 'native-base';
import Swiper from 'react-native-swiper';
import Styles from './style';
import {initApp} from '../../utils/GeneralFunction';

const DATA_SPLASH = [
  {
    initial: 'Easy To Monitor Member of Family',
    title: 'Kelola Keluarga Dalam Genggaman',
    subtitle:
      'Kini cukup dengan aplikasi kita dapat mengontrol anggota keluarga dengan mudah.',
    image: require('../../Assets/Images/Splash/Splash_1.png'),
  },
  {
    initial: 'Track & Trace Family Location',
    title: 'Lacak dan Ketahui Lokasi Anggota Keluarga',
    subtitle:
      'Kita juga dapat melacak dan mengetahui lokasi anggota keluarga secara akurat dan real-time.',
    image: require('../../Assets/Images/Splash/Splash_2.png'),
  },
  {
    initial: 'Send Message Instantly',
    title: 'Kirim Pesan Keluarga Dengan Instan',
    subtitle:
      'Menghubungi anggota keluarga kini dapat dilakukan dengan mudah dan cepat.',
    image: require('../../Assets/Images/Splash/Splash_3.png'),
  },
];

const SplashPage = item => (
  <View style={{flex: 1}}>
    <View style={Styles.BackgroundImage}>
      <ImageBackground source={item.image} style={Styles.SplashScreen} />
    </View>
    <View style={Styles.Header}>
      <Text style={Styles.Initial}>{item.headtitle}</Text>
    </View>
    <View style={Styles.Content}>
      <Text style={Styles.MainTitle}>{item.maintitle}</Text>
      <Text style={Styles.SubTitle}>{item.subtitle}</Text>
    </View>
  </View>
);

const ButtonLoginRegister = props => (
  <View style={Styles.FooterSection}>
    <Button transparent style={Styles.ButtonRegister}>
      <Text style={Styles.ButtonRegisterText}>Daftar</Text>
    </Button>
    <Button style={Styles.ButtonLogin}>
      <Text style={Styles.ButtonLoginText}>Login</Text>
    </Button>
  </View>
);

let _swiper;
const SplashScreen = props => {
  const [indexSwiper, setIndexSwiper] = useState(0);

  return (
    <Content style={{flex: 1}}>
      <StatusBar backgroundColor="#6c40bd" barStyle="light-content" />
      <View>
        <Swiper
          style={Styles.Swiper}
          loop={false}
          activeDotColor="#6c40bd"
          dotStyle={{width: 20}}
          activeDotStyle={{width: 20}}
          ref={Swiper => (_swiper = Swiper)}
          onIndexChanged={i => setIndexSwiper(i)}>
          {DATA_SPLASH.map((item, index) => {
            return (
              <SplashPage
                key={index}
                image={item.image}
                maintitle={item.title}
                subtitle={item.subtitle}
                headtitle={item.initial}
              />
            );
          })}
        </Swiper>
      </View>
      <View style={Styles.FooterSection}>
        <View style={{flex: 1}}>
          {indexSwiper !== 0 && (
            <Button
              transparent
              style={Styles.ButtonNavPrev}
              onPress={() => indexSwiper > 0 && _swiper.scrollBy(-1)}>
              <Text style={Styles.ButtonNavPrevText}>Kembali</Text>
            </Button>
          )}
        </View>
        <View style={{flex: 1}}>
          {indexSwiper !== 2 ? (
            <Button
              style={Styles.ButtonNavNext}
              onPress={() => indexSwiper < 2 && _swiper.scrollBy(1)}>
              <Text style={Styles.ButtonNavNextText}>Lanjutkan</Text>
            </Button>
          ) : (
            <Button
              style={Styles.ButtonNavNext}
              onPress={() => {
                props.navigation.replace('LoginRegisterScreen');
                initApp();
              }}>
              <Text style={Styles.ButtonNavNextText}>Selesai</Text>
            </Button>
          )}
        </View>
      </View>
      <View style={Styles.ButtonSkip}>
        <Button
          transparent
          onPress={() => {
            props.navigation.replace('LoginRegisterScreen');
            initApp();
          }}>
          <Text style={Styles.ButtonSkipText}>SKIP</Text>
        </Button>
      </View>
    </Content>
  );
};

export default SplashScreen;
