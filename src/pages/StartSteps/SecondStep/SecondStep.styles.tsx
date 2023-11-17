import {StyleSheet, Platform} from 'react-native';
import {
  fonts,
  fontSizes,
  screenWidth,
  screenHeight,
  screenScale,
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
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 0 : 24,
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
  iconContainer: {
    width: screenWidth * 0.78,
  },
  rectangle: {
    width: screenWidth * 0.35,
    height: screenHeight * 0.04,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
  },
  body: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: {
    width: screenWidth,
    height: screenScale * 1300,
    resizeMode: 'contain',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? screenHeight * 0.05 : screenHeight * 0.065,
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
