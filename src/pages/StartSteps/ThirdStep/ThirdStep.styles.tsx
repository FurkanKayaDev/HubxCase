import {StyleSheet, Platform} from 'react-native';
import {
  screenWidth,
  screenHeight,
  screenScale,
  fonts,
  fontSizes,
  colors,
} from '../../../constants/constants';
const isTablet = Platform.isPad;
export const styles = StyleSheet.create({
  imageBg: {
    width: screenWidth * 1,
    height: screenHeight * 1.2,
    resizeMode: 'cover',
    marginTop:
      Platform.OS !== 'ios'
        ? -screenHeight * 0.04
        : isTablet
        ? -screenHeight * 0.03
        : -screenHeight * 0.04,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {flex: 1, alignItems: 'center', justifyContent: 'space-around'},
  iconContainer: {width: screenWidth * 0.78},
  rectangle: {
    width: screenWidth * 0.45,
    height: screenHeight * 0.06,
    resizeMode: 'contain',
    position: 'absolute',
    right: screenWidth * 0.05,
  },
  body: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: {
    width: screenWidth,
    height: screenScale * 1100,
    resizeMode: 'stretch',
    marginTop:
      Platform.OS === 'ios' ? screenHeight * 0.05 : screenHeight * 0.02,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? screenHeight * 0.05 : screenHeight * 0.065,
  },
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
    marginTop: isTablet
      ? screenHeight * 0.04
      : Platform.OS === 'ios'
      ? screenHeight * 0.06
      : screenHeight * 0.08,
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
