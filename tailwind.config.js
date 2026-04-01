/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 10px 40px rgba(15, 23, 42, 0.12)',
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
      },
      colors: {
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          400: '#2dd4bf',
          600: '#0d9488',
          700: '#0f766e',
        },
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at 12% 18%, rgba(20, 184, 166, 0.16), transparent 30%), radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.14), transparent 34%), linear-gradient(145deg, #f8fafc 0%, #eff6ff 45%, #f8fafc 100%)',
        'mesh-dark':
          'radial-gradient(circle at 12% 18%, rgba(45, 212, 191, 0.12), transparent 30%), radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.12), transparent 34%), linear-gradient(145deg, #0b1120 0%, #0f172a 45%, #111827 100%)',
      },
    },
  },
  plugins: [],
};
