import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'gray-light': '#d3dce6',
        'blue': '#1e3a8a',
        'purple': '#5b21b6',
        'yellow-500': '#FBBF24', // Ensure this matches your desired yellow
        "port":"#04152d"
      },
      spacing: {
        '90': '639px',
        '30': '330px',
        "80": "539px",
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: theme => ({
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      }),
      transitionProperty: {
        'color': 'color',
        'bg': 'background-color',
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['hover'],
      backgroundColor: ['hover'],
      boxShadow: ['hover'],
      transform: ['hover'],
    },
  },
  plugins: [],
};

export default config;
