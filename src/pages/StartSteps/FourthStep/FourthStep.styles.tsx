import {StyleSheet} from 'react-native';
import {
  screenWidth,
  screenHeight,
  fonts,
  fontSizes,
  colors,
} from '../../../constants/constants';

export const styles = StyleSheet.create({
  imageBg: {
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  closeBtn: {
    position: 'absolute',
    top: screenHeight * 0.07,
    right: screenWidth * 0.05,
    zIndex: 3,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 15,
  },
  image: {
    width: screenWidth,
    height: screenHeight * 0.7,
    position: 'absolute',
    top: 0,
    zIndex: 3,
  },
  headerContainer: {
    position: 'absolute',
    width: screenWidth * 0.9,
    bottom: screenWidth * 0.05,
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 5,
  },
  title: {
    fontFamily: fonts.Rubik,
    fontWeight: '400',
    fontSize: fontSizes.h3,
    color: 'white',
  },
  boldTitle: {
    fontFamily: fonts.VisbyBlack,
    fontWeight: 'bold',
    fontSize: fontSizes.h1,
    color: 'white',
  },
  contentText: {
    fontFamily: fonts.Rubik,
    fontWeight: '400',
    fontSize: fontSizes.h10,
    color: 'rgba(255, 255, 255, 0.70)',
    marginTop: 10,
  },
  activeGradient: {
    flexDirection: 'row',
    width: screenWidth * 0.9,
    height: screenHeight * 0.06,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.green,
  },
  deactiveGradient: {
    flexDirection: 'row',
    width: screenWidth * 0.9,
    height: screenHeight * 0.06,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.30)',
  },
  btn: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.06,
    borderRadius: 14,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  btnContainer: {
    marginLeft: 10,
  },
  confirmBtn: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.06,
    borderRadius: 14,
    marginTop: 20,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmBtnText: {
    color: 'white',
    fontSize: fontSizes.h12,
    fontFamily: fonts.RubikBold,
  },
  footer: {
    marginTop: 5,
    width: screenWidth * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  legalText: {
    color: 'rgba(255, 255, 255, 0.52)',
    fontSize: fontSizes.h17,
    fontFamily: fonts.Rubik,
    textAlign: 'center',
  },
  legalOptions: {
    color: 'rgba(255, 255, 255, 0.52)',
    fontSize: fontSizes.h14,
    fontFamily: fonts.Rubik,
    textAlign: 'center',
    marginVertical: 10,
  },
  cardTitle: {
    fontFamily: fonts.RubikBold,
    fontSize: fontSizes.h12,
    color: 'white',
    letterSpacing: 0.5,
  },
  cardContent: {
    fontFamily: fonts.Rubik,
    fontSize: fontSizes.h12,
    color: 'rgba(255, 255, 255, 0.70)',
    letterSpacing: 0.2,
    marginTop: 5,
  },
  premiumOptions: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsBtnTitle: {
    fontFamily: fonts.RubikBold,
    fontSize: fontSizes.h13,
    color: 'white',
    letterSpacing: 0.5,
  },
  optionsBtnContent: {
    fontFamily: fonts.Rubik,
    fontSize: fontSizes.h14,
    color: 'rgba(255, 255, 255, 0.70)',
    letterSpacing: 0.2,
  },
  badge: {
    position: 'absolute',
    top: -1,
    right: -1,
    width: screenWidth * 0.2,
    height: 25,
    backgroundColor: colors.green,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: fontSizes.h13,
    fontFamily: fonts.Rubik,
    fontWeight: '500',
  },
  featuresCardContainer: {
    width: screenWidth * 0.45,
    height: screenHeight * 0.15,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 16,
  },
  cardIcon: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 10,
    marginBottom: 10,
  },
});