import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  darkMode: 'selector', // 이 속성을 사용하지 않으면 Dark mode가 OS theme를 따른다

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
