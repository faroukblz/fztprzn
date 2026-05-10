/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fazti: {
          navy: '#15173d',
          purple: '#982598',
          pink: '#e491c9',
          cream: '#f1e9e9',
        },
        brand: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#982598',
          600: '#7e1d7e',
          700: '#641964',
          800: '#4a124a',
          900: '#15173d',
          950: '#0d0e28',
        }
      },
      fontFamily: {
        sans: ['Cairo', 'Tajawal', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 2s ease-in-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(152, 37, 152, 0.5), 0 0 10px rgba(152, 37, 152, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(152, 37, 152, 0.8), 0 0 30px rgba(152, 37, 152, 0.5), 0 0 40px rgba(152, 37, 152, 0.3)' },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
