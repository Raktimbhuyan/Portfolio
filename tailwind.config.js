/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cyanPulse: '#5EEAD4',
        ink: {
          DEFAULT: '#0B0E14',
          50: '#F5F6F8',
          panel: '#131822',
          panel2: '#171D29',
          border: 'rgba(255,255,255,0.07)',
        },
        amber: {
          glow: '#F2B84B',
          soft: '#FBD08A',
        },
        violet: {
          signal: '#7C8CF8',
        },
        ink900: '#0B0E14',
        muted: '#8B93A7',
        fog: '#E7E9EE',
        
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(242, 184, 75, 0.35)',
        glowViolet: '0 0 40px -10px rgba(124, 140, 248, 0.35)',
        panel: '0 1px 0 0 rgba(255,255,255,0.04) inset',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '36px 36px',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
