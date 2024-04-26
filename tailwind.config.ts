import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx,md}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx,md}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: ({ theme }: { theme: PluginAPI['theme'] }) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            h4: {
              color: theme('colors.white'),
            },
            h5: {
              color: theme('colors.white'),
            },
            h6: {
              color: theme('colors.main-gray'),
            },
            strong: {
              color: theme('colors.white'),
            },
          },
        },
      }),
      colors: {
        'main-gray': '#94a3b8',
        'maim-bg': '#0D1115',
        'accent-color': '#A854FD',
        'purple-main': '#4f0356',
        'purple-light': '#750080',
        'black-bg': '#111111',
        'light-bg': '#1E293B',
      },
    },
    screens: {
      mobile: '320px',
      tablet: '768px',
      laptop: '1280px',
      desktop: '1440px',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
