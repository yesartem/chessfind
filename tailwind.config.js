/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        page:     '#FFE157',
        card:     '#FFFFFF',
        raised:   '#FFFFFF',
        accent:   '#1638E0',
        'accent-tint': '#E8ECFC',
        primary:  '#1A1A1A',
        secondary:'#7A7A7A',
        tertiary: '#B0B0A8',
        danger:   '#D32F1F',
        'danger-tint': '#FCE8E5',
        border:   '#E8DC5C',
      },
      fontFamily: {
        display: ['"Albert Sans"', 'sans-serif'],
        mono:    ['"Work Sans"', 'sans-serif'],
      },
      borderRadius: {
        btn:  '12px',
        card: '20px',
        hero: '24px',
      },
      keyframes: {
        'pulse-ring': {
          '0%,100%': { transform: 'scale(1)', opacity: '0.15' },
          '50%':     { transform: 'scale(1.08)', opacity: '0.35' },
        },
        'pulse-fill': {
          '0%,100%': { transform: 'scale(1)' },
          '50%':     { transform: 'scale(1.04)' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          from: { transform: 'translateY(100%)' },
          to:   { transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s ease-in-out infinite',
        'pulse-ring-2': 'pulse-ring 2s ease-in-out infinite 0.5s',
        'pulse-fill': 'pulse-fill 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.4s ease-out both',
        'slide-up': 'slide-up 0.35s cubic-bezier(0.32,0.72,0,1)',
      },
    },
  },
  plugins: [],
}
