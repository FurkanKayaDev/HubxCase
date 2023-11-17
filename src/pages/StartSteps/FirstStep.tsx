import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import FirstStepBg from '../../assets/images/Background.png';
import FirstImage from '../../assets/images/FirstPageImage.png';
import {useNavigation} from '@react-navigation/native';
import {
  colors,
  fontSizes,
  fonts,
  screenHeight,
  screenWidth,
} from '../../constants/constants';
const FirstStep = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={FirstStepBg}
      style={{
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <SafeAreaView
        style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
        <View
          style={{
            width: screenWidth * 0.8,
            marginTop: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.title}>
            Welcome to
            <Text style={styles.boldTitle}> PlantApp</Text>
          </Text>
          <Text style={styles.contentText}>
            Identify more than 3000+ plants and 88% accuracy.
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={FirstImage}
            style={{
              width: screenWidth,
              height: screenHeight * 0.6,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('SecondStep')}>
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
          <View style={styles.legal}>
            <Text style={styles.legalText}>
              By tapping next, you are agreeing to PlantID
            </Text>
            <Text style={styles.legalText}>
              <Text style={styles.underline}>Terms of Use</Text> &{' '}
              <Text style={styles.underline}>Privacy Policy</Text>.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default FirstStep;

const styles = StyleSheet.create({
  title: {
    color: '#13231B',
    fontFamily: fonts.Rubik,
    fontSize: fontSizes.h4,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.07,
  },
  boldTitle: {
    fontFamily: fonts.Rubik,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  contentText: {
    width: screenWidth * 0.74,
    color: 'rgba(19, 35, 27, 0.70)',
    fontFamily: 'Rubik',
    fontSize: fontSizes.h11,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.07,
  },
  btn: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.07,
    paddingVertical: 18,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: colors.green,
  },
  btnText: {
    fontSize: 15,
    fontFamily: 'Rubik',
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.07,
    lineHeight: 24,
  },
  legal: {
    width: screenWidth * 0.6,
    marginTop: 17,
  },
  legalText: {
    color: 'rgba(89, 113, 101, 0.70)',
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 15,
    letterSpacing: 0.07,
    textAlign: 'center',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
