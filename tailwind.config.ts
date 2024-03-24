import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    darkMode: ['class', '[data-mode="dark"]'],
    extend: {
      screens: {
        'fr': '1100px',
        'ds': '1440px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'midnight': '#001b84',
        'heading': '#1d1e20',
        'body': '#575e66',
        'webbg': '#f8fafe',
      },
    },
  },
  plugins: [],
};
export default config;
