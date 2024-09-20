import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      transitionProperty: {
        height: 'height'
      }
    }
  },

  plugins: [require('@tailwindcss/typography')]
} as Config;
