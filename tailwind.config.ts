import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  darkMode: 'selector',

  theme: {
    extend: {
      height: {
        68: '17rem'
      },
      transitionProperty: {
        height: 'height'
      }
    }
  },

  plugins: [require('@tailwindcss/typography')]
} as Config;
