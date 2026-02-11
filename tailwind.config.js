/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Custom Colors
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c3d66',
          950: '#051e3e',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        accent: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f8b4d8',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be1d5f',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#145231',
          950: '#052e16',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#500a0a',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },

      // Custom Typography
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
        '7xl': ['4.5rem', { lineHeight: '1.2' }],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },

      // Custom Spacing
      spacing: {
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
        128: '32rem',
      },

      // Custom Shadows
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        none: 'none',
        // Custom shadows
        'soft-sm': '0 2px 4px rgba(0, 0, 0, 0.08)',
        'soft-md': '0 4px 8px rgba(0, 0, 0, 0.12)',
        'soft-lg': '0 8px 16px rgba(0, 0, 0, 0.16)',
        'soft-xl': '0 12px 24px rgba(0, 0, 0, 0.2)',
        'glow-sm': '0 0 8px rgba(14, 165, 233, 0.3)',
        'glow-md': '0 0 16px rgba(14, 165, 233, 0.4)',
        'glow-lg': '0 0 24px rgba(14, 165, 233, 0.5)',
        'elevation-1': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'elevation-2': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'elevation-3': '0 8px 24px rgba(0, 0, 0, 0.15)',
      },

      // Custom Animations
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'fade-out': 'fadeOut 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'slide-in-up': 'slideInUp 0.3s ease-out',
        'slide-in-down': 'slideInDown 0.3s ease-out',
        'slide-out-right': 'slideOutRight 0.3s ease-in',
        'slide-out-left': 'slideOutLeft 0.3s ease-in',
        'slide-out-up': 'slideOutUp 0.3s ease-in',
        'slide-out-down': 'slideOutDown 0.3s ease-in',
        'bounce-in': 'bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'bounce-out': 'bounceOut 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'zoom-in': 'zoomIn 0.3s ease-out',
        'zoom-out': 'zoomOut 0.3s ease-in',
        'rotate-in': 'rotateIn 0.6s ease-out',
        'rotate-out': 'rotateOut 0.6s ease-in',
        'scale-up': 'scaleUp 0.3s ease-out',
        'scale-down': 'scaleDown 0.3s ease-in',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite',
        'wiggle': 'wiggle 0.8s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out infinite',
        'flip': 'flip 0.6s ease-in-out',
        'flip-in': 'flipIn 0.6s ease-out',
        'flip-out': 'flipOut 0.6s ease-in',
        'swing': 'swing 1s ease-in-out infinite',
        'heart-beat': 'heartBeat 1.3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
        slideOutUp: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
        slideOutDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        bounceOut: {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(0.95)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
          '100%': { opacity: '0', transform: 'scale(0.3)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(1)' },
        },
        zoomOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0' },
          '100%': { opacity: '0', transform: 'scale(0.3)' },
        },
        rotateIn: {
          '0%': { opacity: '0', transform: 'rotate(-200deg)' },
          '100%': { opacity: '1', transform: 'rotate(0)' },
        },
        rotateOut: {
          '0%': { opacity: '1', transform: 'rotate(0)' },
          '100%': { opacity: '0', transform: 'rotate(200deg)' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleDown: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.9)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '50%': { transform: 'rotate(-1deg)' },
          '75%': { transform: 'rotate(1deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
        flip: {
          '0%': { transform: 'perspective(400px) rotateY(0)' },
          '100%': { transform: 'perspective(400px) rotateY(360deg)' },
        },
        flipIn: {
          '0%': { opacity: '0', transform: 'perspective(400px) rotateY(90deg)' },
          '40%': { transform: 'perspective(400px) rotateY(-10deg)' },
          '70%': { transform: 'perspective(400px) rotateY(10deg)' },
          '100%': { opacity: '1', transform: 'perspective(400px) rotateY(0deg)' },
        },
        flipOut: {
          '0%': { opacity: '1', transform: 'perspective(400px) rotateY(0deg)' },
          '30%': { opacity: '1', transform: 'perspective(400px) rotateY(-20deg)' },
          '100%': { opacity: '0', transform: 'perspective(400px) rotateY(90deg)' },
        },
        swing: {
          '20%': { transform: 'rotate(15deg)' },
          '40%': { transform: 'rotate(-10deg)' },
          '60%': { transform: 'rotate(5deg)' },
          '80%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        heartBeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(14, 165, 233, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.6)' },
        },
      },

      // Custom Border Radius
      borderRadius: {
        none: '0',
        xs: '0.125rem',
        sm: '0.25rem',
        base: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        full: '9999px',
      },

      // Custom Transitions
      transitionDuration: {
        0: '0ms',
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms',
      },
      transitionTimingFunction: {
        linear: 'linear',
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },

      // Custom Gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #0ea5e9 0%, #6d28d9 100%)',
        'gradient-success': 'linear-gradient(135deg, #22c55e 0%, #0ea5e9 100%)',
        'gradient-danger': 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
        'gradient-cool': 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)',
        'gradient-warm': 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
      },

      // Custom Z-Index
      zIndex: {
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
        auto: 'auto',
        dropdown: '1000',
        sticky: '1020',
        fixed: '1030',
        modal: '1040',
        popover: '1050',
        tooltip: '1060',
      },

      // Custom Opacity
      opacity: {
        0: '0',
        5: '0.05',
        10: '0.1',
        20: '0.2',
        25: '0.25',
        30: '0.3',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        70: '0.7',
        75: '0.75',
        80: '0.8',
        90: '0.9',
        95: '0.95',
        100: '1',
      },

      // Custom Aspect Ratio
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
        '3/2': '3 / 2',
        '4/3': '4 / 3',
        '21/9': '21 / 9',
        '9/16': '9 / 16',
        '2/3': '2 / 3',
      },

      // Custom Width & Height
      width: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '11/12': '91.666667%',
        fit: 'fit-content',
        min: 'min-content',
        max: 'max-content',
        screen: '100vw',
        screen-75: '75vw',
        screen-50: '50vw',
        screen-25: '25vw',
      },

      // Container Queries
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [
    // Utilities for custom features
    function ({ addUtilities, addComponents, e, theme }) {
      // Custom text utilities
      const textUtilities = {
        '.text-truncate': {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        },
        '.text-clamp-1': {
          display: '-webkit-box',
          '-webkit-line-clamp': '1',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.text-clamp-2': {
          display: '-webkit-box',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.text-clamp-3': {
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.text-clamp-4': {
          display: '-webkit-box',
          '-webkit-line-clamp': '4',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
      };

      // Custom backdrop utilities
      const backdropUtilities = {
        '.backdrop-blur-xs': {
          backdropFilter: 'blur(2px)',
        },
        '.backdrop-blur-2xl': {
          backdropFilter: 'blur(40px)',
        },
      };

      // Custom flex utilities
      const flexUtilities = {
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.flex-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        '.flex-start': {
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        },
        '.flex-end': {
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        },
      };

      // Custom grid utilities
      const gridUtilities = {
        '.grid-center': {
          display: 'grid',
          placeItems: 'center',
        },
        '.grid-between': {
          display: 'grid',
          placeItems: 'space-between',
        },
      };

      // Custom scrollbar utilities
      const scrollbarUtilities = {
        '.scrollbar-hide': {
          scrollbarWidth: 'none',
          '-ms-overflow-style': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgb(209, 213, 219) rgb(243, 244, 246)',
        },
        '.scrollbar-thumb-primary': {
          scrollbarColor: 'var(--tw-scroll-thumb) var(--tw-scroll-track)',
          '--tw-scroll-thumb': theme('colors.primary.500'),
          '--tw-scroll-track': theme('colors.gray.100'),
        },
      };

      addUtilities({
        ...textUtilities,
        ...backdropUtilities,
        ...flexUtilities,
        ...gridUtilities,
        ...scrollbarUtilities,
      });

      // Custom components
      const components = {
        '.btn': {
          '@apply': 'px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed',
        },
        '.btn-primary': {
          '@apply': 'btn bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-md hover:shadow-lg',
        },
        '.btn-secondary': {
          '@apply': 'btn bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 shadow-md hover:shadow-lg',
        },
        '.btn-success': {
          '@apply': 'btn bg-success-500 text-white hover:bg-success-600 active:bg-success-700 shadow-md hover:shadow-lg',
        },
        '.btn-danger': {
          '@apply': 'btn bg-danger-500 text-white hover:bg-danger-600 active:bg-danger-700 shadow-md hover:shadow-lg',
        },
        '.btn-outline': {
          '@apply': 'btn border-2 border-current bg-transparent text-neutral-700 hover:bg-neutral-50 active:bg-neutral-100',
        },
        '.btn-ghost': {
          '@apply': 'btn bg-transparent text-current hover:bg-neutral-100 active:bg-neutral-200',
        },
        '.btn-sm': {
          '@apply': 'px-3 py-1.5 text-sm',
        },
        '.btn-lg': {
          '@apply': 'px-6 py-3 text-lg',
        },
        '.card': {
          '@apply': 'bg-white rounded-xl shadow-base p-6 border border-neutral-200 transition-all duration-300 hover:shadow-lg',
        },
        '.card-interactive': {
          '@apply': 'card cursor-pointer hover:border-primary-300',
        },
        '.input': {
          '@apply': 'w-full px-4 py-2.5 rounded-lg border-2 border-neutral-200 focus:border-primary-500 focus:outline-none transition-colors duration-200 text-base',
        },
        '.input-sm': {
          '@apply': 'px-3 py-1.5 text-sm',
        },
        '.input-lg': {
          '@apply': 'px-5 py-3.5 text-lg',
        },
        '.label': {
          '@apply': 'text-sm font-semibold text-neutral-700 mb-2 block',
        },
        '.badge': {
          '@apply': 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium',
        },
        '.badge-primary': {
          '@apply': 'badge bg-primary-100 text-primary-700',
        },
        '.badge-success': {
          '@apply': 'badge bg-success-100 text-success-700',
        },
        '.badge-warning': {
          '@apply': 'badge bg-warning-100 text-warning-700',
        },
        '.badge-danger': {
          '@apply': 'badge bg-danger-100 text-danger-700',
        },
        '.divider': {
          '@apply': 'w-full h-px bg-neutral-200',
        },
        '.link': {
          '@apply': 'text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 cursor-pointer',
        },
        '.link-underline': {
          '@apply': 'link underline decoration-2 underline-offset-2',
        },
      };

      addComponents(components);
    },
  ],
}
