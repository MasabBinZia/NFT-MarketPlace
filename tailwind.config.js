/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'prussian-blue': 'hsla(217, 33%, 17%, 1)',
      'oxford-blue-2': 'hsla(222, 47%, 11%, 1)',
      'oxford-blue': 'hsla(221, 33%, 15%, 1)',
      'blue-violet': 'hsla(262, 83%, 58%, 1)',
      'blue-violet-a5': 'hsla(262, 83%, 58%, 0.05)',
      'blue-violet-a10': 'hsla(262, 83%, 58%, 0.1)',
      'alice-blue': 'hsla(214, 32%, 91%, 1)',
      'alice-blue-2': 'hsla(215, 30%, 92%, 1)',
      'cultured': 'hsla(220, 14%, 96%, 1)',
      'gainsboro': 'hsla(220, 13%, 91%, 1)',
      'light-gray': 'hsla(216, 12%, 84%, 1)',
      'white': 'hsla(0, 0%, 100%, 1)',
      'white-a10': 'hsla(0, 0%, 100%, 0.1)',
      'manatee': 'hsla(218, 11%, 65%, 1)',
      'green-cyan': 'hsla(161, 94%, 30%, 1)',
      'cadet-grey': 'hsla(215, 20%, 65%, 1)',
      'electric-indigo': 'hsla(263, 70%, 50%, 1)',
      'maximum-red': 'hsla(0, 72%, 51%, 1)',
      'black': 'hsla(0, 0%, 0%, 1)',
      'gunmetal': 'hsla(215, 28%, 17%, 1)',
    },
    boxShadow: {
      '1': '0 0 3px hsl(215, 28%, 17%)',
      '2': '0 5px 13px hsl(215, 28%, 17%)',
      '3': '0 5px 13px hsl(217, 19%, 27%)',
      '4': '0 0 3px hsl(217, 19%, 27%)',
      '5': '0 5px 13px hsla(214, 19%, 29%, 0.2)',
    },
  },
  plugins: [],
}
