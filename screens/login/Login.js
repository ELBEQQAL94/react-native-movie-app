// Libs
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

// React Native Components
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

// Constants
import {COLORS, FONTS, SIZES, posters} from '../../constants';

const Login = ({navigation}) => {
  // States

  // index of getting random poster
  const [activePosterIndex, setActivePosterIndex] = useState(0);

  // Render random poster every 1 second

  useEffect(() => {
    const randomPosterIndex =
      Math.floor(Math.random() * posters.length - 1) + 1;
    setTimeout(() => setActivePosterIndex(randomPosterIndex), 2000);
  }, [activePosterIndex]);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        resizeMode="stretch"
        source={posters[activePosterIndex]}>
        <LinearGradient
          colors={[COLORS.transparent, COLORS.primary]}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.linearGradientStyle}>
          <Text style={styles.mainTitle}>Welcome</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.loginButton}>
            <Text style={styles.loginButtonTitle}>LOGIN</Text>
          </TouchableOpacity>
          <View style={styles.descriptionContainer}>
            <Text style={{color: COLORS.white, marginRight: 5}}>
              your first time here?
            </Text>
            <Text style={{color: COLORS.orange}}>Sign Up</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  linearGradientStyle: {
    position: 'absolute',
    bottom: 0,
    height: 300,
    width: '100%',
    paddingHorizontal: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    position: 'absolute',
    zIndex: 1,
    color: COLORS.white,
    fontWeight: 'bold',
    ...FONTS.largeTitle,
  },
  loginButton: {
    position: 'absolute',
    bottom: 70,
    backgroundColor: COLORS.white,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.radius,
    borderRadius: SIZES.padding,
  },
  loginButtonTitle: {
    color: COLORS.black,
    ...FONTS.h3,
  },
  descriptionContainer: {
    marginTop: SIZES.padding,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40,
  },
});

export default Login;
