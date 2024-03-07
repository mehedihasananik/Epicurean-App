/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '360px',
        sm: '375px',
        lsm: '414px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1366px',
        '3xl': '1536px',
        '4xl': '1920px',
      },
      fontFamily: {
        Abril: ["Abril", "sans-serif"],
        Bakilda: ["Bakilda", "sans-serif"],
        ValueSans: ["ValueSans", "sans-serif"],
        lemonada: ['var(--font-lemonada)'],
      }
    },
  },
  plugins: [],
};
