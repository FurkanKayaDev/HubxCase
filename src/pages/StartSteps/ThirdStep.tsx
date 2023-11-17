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
import ThirdImage from '../../assets/images/ThirdImage.png';
import SecondBackground from '../../assets/images/SecondBackground.png';
import Rectangle from '../../assets/images/Rectangle.png';
import {useNavigation} from '@react-navigation/native';
import {
  colors,
  fontSizes,
  fonts,
  screenHeight,
  screenScale,
  screenWidth,
} from '../../constants/constants';
import * as Icons from '../../assets/icons';

const ThirdStep = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={SecondBackground}
      style={{
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            Get plant <Text style={styles.boldTitle}> care guides </Text>
          </Text>
          <View
            style={{
              width: screenWidth * 0.78,
            }}>
            <Image
              source={Rectangle}
              style={{
                width: screenWidth * 0.45,
                height: screenHeight * 0.06,
                resizeMode: 'contain',
                position: 'absolute',
                right: screenWidth * 0.05,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={ThirdImage}
            style={{
              width: screenWidth,
              height: screenScale * 1200,
              resizeMode: 'contain',
            }}
          />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: screenHeight * 0.04,
            }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('FourthStep')}>
              <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
            <View style={styles.dotSlider}>
              <Icons.EmptyDot style={styles.dot} />
              <Icons.FullDot style={styles.dot} />
              <Icons.EmptyDot style={styles.dot} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ThirdStep;

const styles = StyleSheet.create({
  title: {
    color: '#13231B',
    fontFamily: fonts.RubikMedium,
    fontSize: fontSizes.h6,
    fontStyle: 'normal',
    letterSpacing: 0.07,
  },
  boldTitle: {
    fontFamily: fonts.RubikBlack,
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

  headerContainer: {
    width: screenWidth * 0.8,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  dotSlider: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  dot: {
    marginHorizontal: 4,
  },
});
