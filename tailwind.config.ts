import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx,md}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx,md}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/tw-elements-react/dist/js/**/*.js',
  ],
  safelist: ['animate-slide-in', 'animate-fade-in', 'animate-fade-out'],
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
        'main-blue-hover': '#1858FD',
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
      'desktop-light': '1600px',
      'desktop-big': '1800px',
      'desktop-hard': '1920px',
    },
    keyframes: {
      'slide-in': {
        '0%': { transform: 'translateY(100px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '100%' },
      },
      fade: {
        '0%': { opacity: '0' },
        '100%': { opacity: '100%' },
      },
    },
    animation: {
      'slide-in': 'slide-in 1s ease-in-out',
      'fade-in': 'fade 1s ease-in-out',
      'fade-out': 'fade 1s ease-in-out reverse',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tw-elements-react/dist/plugin.cjs'),
  ],
};
export default config;
