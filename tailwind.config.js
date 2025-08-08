/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
					700: '#b45309',
        },
        success: {
          400: '#34d399',
          500: '#10b981',
        },
        cyber: {
          100: '#00ffff',
          200: '#00e6e6',
          300: '#00cccc',
          400: '#00b3b3',
          500: '#009999',
          600: '#008080',
          700: '#006666',
          800: '#004d4d',
          900: '#003333',
        },
        neon: {
          pink: '#ff00ff',
          green: '#00ff00',
          blue: '#0080ff',
          purple: '#8000ff',
          orange: '#ff8000',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'typing': 'typing 1.5s steps(20) infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'count-up': 'countUp 2s ease-out',
        'matrix-rain': 'matrixRain 20s linear infinite',
        'hologram': 'hologram 3s ease-in-out infinite',
        'neural-pulse': 'neuralPulse 2s ease-in-out infinite',
        'data-stream': 'dataStream 15s linear infinite',
        'quantum-shift': 'quantumShift 4s ease-in-out infinite',
        'cyber-glitch': 'cyberGlitch 0.3s ease-in-out infinite',
        'energy-flow': 'energyFlow 3s ease-in-out infinite',
        'scan-line': 'scanLine 2s linear infinite',
        'orbit': 'orbit 10s linear infinite',
        'particle-float': 'particleFloat 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' },
        },
        typing: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        countUp: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        matrixRain: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        hologram: {
          '0%, 100%': { 
            opacity: '0.8',
            transform: 'translateY(0px) rotateX(0deg)',
            filter: 'hue-rotate(0deg)'
          },
          '50%': { 
            opacity: '1',
            transform: 'translateY(-5px) rotateX(2deg)',
            filter: 'hue-rotate(90deg)'
          },
        },
        neuralPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 255, 255, 0.8), inset 0 0 30px rgba(0, 255, 255, 0.3)' 
          },
        },
        dataStream: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        quantumShift: {
          '0%, 100%': { 
            transform: 'scale(1) rotate(0deg)',
            filter: 'hue-rotate(0deg) brightness(1)'
          },
          '25%': { 
            transform: 'scale(1.05) rotate(1deg)',
            filter: 'hue-rotate(90deg) brightness(1.2)'
          },
          '50%': { 
            transform: 'scale(0.95) rotate(-1deg)',
            filter: 'hue-rotate(180deg) brightness(0.8)'
          },
          '75%': { 
            transform: 'scale(1.02) rotate(0.5deg)',
            filter: 'hue-rotate(270deg) brightness(1.1)'
          },
        },
        cyberGlitch: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(-1px)' },
          '80%': { transform: 'translateX(1px)' },
        },
        energyFlow: {
          '0%': { 
            backgroundPosition: '0% 50%',
            filter: 'hue-rotate(0deg)'
          },
          '50%': { 
            backgroundPosition: '100% 50%',
            filter: 'hue-rotate(180deg)'
          },
          '100%': { 
            backgroundPosition: '0% 50%',
            filter: 'hue-rotate(360deg)'
          },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        particleFloat: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) scale(1)',
            opacity: '0.7'
          },
          '33%': { 
            transform: 'translateY(-20px) translateX(10px) scale(1.1)',
            opacity: '1'
          },
          '66%': { 
            transform: 'translateY(10px) translateX(-5px) scale(0.9)',
            opacity: '0.8'
          },
        }
      },
      backgroundImage: {
        'neural-network': 'radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)',
        'quantum-field': 'linear-gradient(45deg, rgba(0, 255, 255, 0.1) 0%, rgba(255, 0, 255, 0.1) 25%, rgba(0, 255, 0, 0.1) 50%, rgba(255, 128, 0, 0.1) 75%, rgba(128, 0, 255, 0.1) 100%)',
        'energy-grid': 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.1) 50%, transparent 100%), linear-gradient(0deg, transparent 0%, rgba(255, 0, 255, 0.1) 50%, transparent 100%)',
      }
    },
  },
  plugins: [],
}
