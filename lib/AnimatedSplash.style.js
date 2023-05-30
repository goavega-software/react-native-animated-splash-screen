import { StyleSheet, Dimensions } from 'react-native';

import { COLOR_WHITE, SPLASH_LOGO_SIZE } from './Constants';

const { width, height } = Dimensions.get('screen');

export const _staticBackground = (logoOpacity, backgroundColor) => [
  logoOpacity,
  StyleSheet.absoluteFill,
  { backgroundColor: backgroundColor || COLOR_WHITE },
];

export const _dynamicImageBackground = (imageScale, logoOpacity, backgroundColor) => [
  imageScale,
  logoOpacity,
  {
    ...StyleSheet.absoluteFill,
    width,
    height,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    tintColor: backgroundColor || null,
  },
];

export const _dynamicLogoStyle = (logoScale, logoOpacity, logoWidth, logoHeight) => [
  logoScale,
  logoOpacity,
  {
    width: logoWidth || SPLASH_LOGO_SIZE,
    height: logoHeight || SPLASH_LOGO_SIZE,
  },
];

export const _dynamicCustomComponentStyle = (logoScale, logoOpacity, logoWidth, logoHeight) => [
  logoScale,
  logoOpacity,
  {
    width: logoWidth || SPLASH_LOGO_SIZE,
    height: logoHeight || SPLASH_LOGO_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
];

export default {
  container: {
    flex: 1,
  },
  containerGlue: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
  },
  logoStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
};
