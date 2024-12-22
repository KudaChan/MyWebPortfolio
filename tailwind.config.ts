import svgToDataUri from "mini-svg-data-uri";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
    },
    colors: {
      'text': {
        50: '#0c0e0b',
        100: '#181d16',
        200: '#2f3a2c',
        300: '#475643',
        400: '#5e7359',
        500: '#76906f',
        600: '#91a68c',
        700: '#adbca9',
        800: '#c8d3c5',
        900: '#e4e9e2',
        950: '#f1f4f1',
      },
      'background': {
        50: '#0b0e0b',
        100: '#171c17',
        200: '#2e382e',
        300: '#455445',
        400: '#5c705c',
        500: '#738c73',
        600: '#8fa38f',
        700: '#abbaab',
        800: '#c7d1c7',
        900: '#e3e8e3',
        950: '#f1f4f1',
      },
      'primary': {
        50: '#0c0e0b',
        100: '#171d16',
        200: '#2f3a2c',
        300: '#465643',
        400: '#5e7359',
        500: '#75906f',
        600: '#91a68c',
        700: '#acbca9',
        800: '#c8d3c5',
        900: '#e3e9e2',
        950: '#f1f4f1',
      },
      'secondary': {
        50: '#0b0e0e',
        100: '#161c1d',
        200: '#2c383a',
        300: '#435356',
        400: '#596f73',
        500: '#6f8b90',
        600: '#8ca2a6',
        700: '#a9b9bc',
        800: '#c5d1d3',
        900: '#e2e8e9',
        950: '#f1f3f4',
      },
      'accent': {
        50: '#0b0d0e',
        100: '#161a1d',
        200: '#2c333a',
        300: '#434d56',
        400: '#596673',
        500: '#6f8090',
        600: '#8c99a6',
        700: '#a9b3bc',
        800: '#c5ccd3',
        900: '#e2e6e9',
        950: '#f1f2f4',
      },
    },
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: 'Inter',
      body: 'Inter',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    extend: {},
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}