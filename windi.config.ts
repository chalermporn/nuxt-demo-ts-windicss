import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: false,
  theme: {
    filter: {
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)',
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)',
    },
  },
  variants: {
    filter: ['responsive'],
    backdropFilter: ['responsive'],
  },
  extend: {
    lineClamp: {
      sm: '3',
      lg: '10',
    },
    typography: {
      DEFAULT: {
        css: {
          color: '#333',
          a: {
            'color': '#3182ce',
            '&:hover': {
              color: '#2c5282',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/filters'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/scroll-snap'),
    require('windicss/plugin/typography'),
    require('@windicss/animations')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
    // ...
  ],
})