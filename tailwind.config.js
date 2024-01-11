/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
	darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
			colors: {
				primary1: "hsl(204,23.8%,95.9%)",
				background1: "#0F1624",
				accent1: "hsl(34.9,98.6%,72.9%)",
				button: "hsl(205.1,100%,36.1%)",
				background2: "hsl(232.7,27.3%,23.7%)",
			},
    },
  },
  plugins: [],
}
