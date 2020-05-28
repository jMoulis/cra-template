import { BreakPointsTypes, ColorsTypes, ThemeTypes } from 'styles/types';

export const breakpoints: BreakPointsTypes = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
};

const mediaQueries: BreakPointsTypes = Object.keys(breakpoints).reduce(
  (response, key) => {
    return {
      ...response,
      [key]: `@media (min-width: ${breakpoints[key]}px)`,
    };
  },
  {
    lg: 0,
    md: 0,
    sm: 0,
    xs: 0,
  }
);

const colors: ColorsTypes = {
  primary: '#005AA3',
  secondary: '#003057',
  tertiary: '#0084F0',
  white: '#FFFFFF',
  orange: '#E55917',
  default: '#0065B2',
  create: '#0ABFAD',
  neutral: '#a8a8a8',
  danger: '#DC3545',
  warning: '#ffc107',
  success: '#28a745',
  error: '#DC3545',
  info: '#0897CC',
  fontDefault: '#4C4C4C',
  hoverPink: '#F20544',
  iconDefault: '#00A1B5',
  modalHeader: '#00B1C0',
  subModalBackground: '#ff6219',
  grays: {
    dark: '#4C4C4C',
    darkLight: '#7B7B7B',
    medium: '#a8a8a8',
    mediumLight: '#E3E7EA',
    light: '#f6f6f6',
    extraLight: '#fcfcfc',
  },
};

export const theme: ThemeTypes = {
  colors,
  mediaQueries,
  breakpoints,
};

export default theme;
