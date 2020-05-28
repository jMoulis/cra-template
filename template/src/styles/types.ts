export interface ColorsTypes {
  primary: string;
  modalHeader: string;
  secondary: string;
  tertiary: string;
  white: string;
  orange: string;
  create: string;
  default: string;
  success: string;
  danger: string;
  neutral: string;
  error: string;
  warning: string;
  info: string;
  fontDefault: string;
  hoverPink: string;
  iconDefault: string;
  subModalBackground: string;
  grays: {
    dark: string;
    darkLight: string;
    medium: string;
    light: string;
    extraLight: string;
    mediumLight: string;
  };
}

export interface BreakPointsTypes {
  [index: string]: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
}

export interface ThemeTypes {
  colors: ColorsTypes;
  mediaQueries: BreakPointsTypes;
  breakpoints: BreakPointsTypes;
}
