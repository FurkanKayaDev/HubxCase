import {StyleSheet} from 'react-native';
import {
  screenWidth,
  fonts,
  fontSizes,
  screenHeight,
  colors,
} from '../../../constants/constants';

export const styles = StyleSheet.create({
  imageBg: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {flex: 1, justifyContent: 'space-evenly', alignItems: 'center'},
  headerContainer: {
    width: screenWidth * 0.8,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  image: {
    width: screenWidth,
    height: screenHeight * 0.6,
    resizeMode: 'contain',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
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
