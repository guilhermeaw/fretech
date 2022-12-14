import { extendTheme, ThemeOverride } from '@chakra-ui/react';

export const customTheme = extendTheme({
  colors: {
    brand: {
      500: '#7D40E7',
      600: '#6b25e3',
    },
    contentBg: '#F5F5F5',
  },
  fonts: {
    body: '"Roboto", sans-serif',
    heading: '"Roboto-Bold", sans-serif',
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
      },
    },
    Container: {
      sizes: {
        xl: {
          maxW: '1500px',
        },
      },
    },
  },
} as ThemeOverride);
