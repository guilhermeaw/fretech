import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    green: {
      700: '#00875F',
      500: '#00B37E',
    },
    gray: {
      700: '#121214',
      600: '#202024',
      500: '#29292E',
      400: '#323238',
      300: '#7C7C8A',
      200: '#C4C4CC',
      100: '#E1E1E6',
    },
    white: '#FFFFFF',
    red: {
      500: '#F75A68',
    },
    primary: {
      100: '#f0f0ff',
      200: '#d6d6ff',
      300: '#adadff',
      400: '#8585ff',
      500: '#7D40E7',
      600: '#6931ca',
      700: '#5929b8',
      800: '#4c2889',
      900: '#3a2557',
    },
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148,
  },
  components: {
    Button: {
      baseStyle: {
        color: 'white',
        rounded: 'xl',
      },
      defaultProps: {
        variant: 'solid',
      },
      variants: {
        outline: {
          _text: {
            color: 'primary.500',
          },
          borderColor: 'primary.500',
        },
        solid: {
          _pressed: {
            bg: 'primary.600',
          },
          bg: 'primary.500',
        },
      },
    },
  },
});

type CustomThemeType = typeof THEME;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
