import {Dimensions, Platform, PixelRatio} from 'react-native';

export const screenWidth = Math.round(Dimensions.get('window').width);
export const screenHeight = Math.round(Dimensions.get('window').height);
export const screenScale = screenWidth / screenHeight;
const scale = screenWidth / 320;

export function normalize(size: number) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
export const fontSizes = {
  h1: normalize(30),
  h2: normalize(28),
  h3: normalize(26),
  h4: normalize(24),
  h5: normalize(22),
  h6: normalize(20),
  h7: normalize(18),
  h8: normalize(16),
  h9: normalize(15),
  h10: normalize(14),
  h11: normalize(13),
  h12: normalize(12),
  h13: normalize(11),
  h14: normalize(10),
  h15: normalize(9),
  h16: normalize(8),
  h17: normalize(7),
  h18: normalize(6),
};

export const colors = {
  darkGreen: '#101E17',
  green: '#28AF6E',
};

export const fonts = {
  Rubik: 'Rubik-Regular',
  RubikBold: 'Rubik-Bold',
  RubikMedium: 'Rubik-Medium',
  RubikLight: 'Rubik-Light',
  RubikThin: 'Rubik-Thin',
  RubikBlack: 'Rubik-Black',
  SfPro: 'SFProDisplay-Regular',
  SfProBold: 'SFProDisplay-Bold',
  SfProMedium: 'SFProDisplay-Medium',
  SfProLight: 'SFProDisplay-Light',
  SfProThin: 'SFProDisplay-Thin',
  SfProBlack: 'SFProDisplay-Black',
  Visby: 'VisbyCF-Regular',
  VisbyBold: 'VisbyCF-Bold',
  VisbyMedium: 'VisbyCF-Medium',
  VisbyLight: 'VisbyCF-Light',
  VisbyThin: 'VisbyCF-Thin',
  VisbyBlack: 'VisbyCF-Black',
};
