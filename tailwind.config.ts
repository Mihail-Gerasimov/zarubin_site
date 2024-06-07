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
      backgroundImage: {
        'mobile-banner': "url('/assets/images/banner/mobile_main_banner.png')",
        'tablet-banner': "url('/assets/images/banner/tablet_main_banner.png')",
        'desktop-banner':
          "url('/assets/images/banner/desktop_main_banner.png')",
      },
      typography: ({ theme }: { theme: PluginAPI['theme'] }) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.text-dark'),
            },
            h2: {
              color: theme('colors.text-dark'),
            },
            h3: {
              color: theme('colors.text-dark'),
            },
            h4: {
              color: theme('colors.text-dark'),
            },
            h5: {
              color: theme('colors.text-dark'),
            },
            h6: {
              color: theme('colors.main-gray'),
            },
            strong: {
              color: theme('colors.text-dark'),
            },
          },
        },
      }),
      fontFamily: {
        manrope: ['Manrope'],
        bebas: ['Bebas Neue', 'sans-serif'],
        unbound: ['Unbounded'],
        proxima: ['Proxima Nova'],
      },
      colors: {
        'main-beige': '#F7F7F7',
        'main-bg': '#00030C',
        'main-blue': '#013EDF',
        'dark-blue': '#000A25',
        'main-gray': 'rgba(255, 255, 255, 0.30)',
        'main-disabled': '#DCDDEB',
        dark: '#1B2541',
        'text-gray': 'rgba(1, 12, 44, 0.40)',
        'text-dark': '#010C2C',
        'header-bg': '#010C2C',
        'pink-gr': '#f50c72',
        'indigo-gr': '#4d39d6',
        'accent-color': '#A854FD',
        'purple-light': '#750080',
        'black-bg': '#111111',
        'light-bg': '#1E293B',
        'btn-col': '#ECEFFA',
      },
    },
    screens: {
      mobile: '320px',
      'mobile-big': '375px',
      tablet: '768px',
      laptop: '1200px',
      desktop: '1440px',
      'desktop-big': '1800px',
      'desktop-hard': '1920px',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
