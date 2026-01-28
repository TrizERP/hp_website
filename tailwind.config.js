/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'serif'],
      merriweather: ['Merriweather', 'serif'],
      noto: ['NotoSans', 'serif'],
      poppins: ['Poppins', 'serif'],
      inter: ['Inter', 'serif'],
      intermedium: ['InterMedium', 'serif'],
      interregular: ['InterRegular', 'serif'],
      osbold: ['OSBold', 'serif'],
      osmedium: ['OSMedium', 'serif'],
      osregular: ['OSRegular', 'serif'],
      ossemibold: ['OSSemiBold', 'serif'],
      intersemibold: ['InterSemiBold', 'serif'],
      pjbold: ['PJBold', 'serif'],
      pj: ['PJ', 'serif'],
      pjsemibold: ['PJSemiBold', 'serif'],
      lx: ['LXBold', 'serif'],
      lxsemibold: ['LXSemiBold', 'serif'],
      lxe: ['LXEBold', 'serif'],
      lxesemibold: ['LXESemiBold', 'serif'],
      /* Raleway Font */
      ralewaybold: ['RalewayBold', 'serif'],
      ralewaysemibold: ['RalewaySemiBold', 'serif'],
      ralewayextrabold: ['RalewayExtraBold', 'serif'],
      /* Quicksand Font */
      quicksandbold: ['QuicksandBold', 'serif'],
      quicksandsemibold: ['QuicksandSemiBold', 'serif'],
    },
    extend: {
      screens: {
        'sm': { 'min': '207px' },
        'sm2': { 'min': '207', 'max': '640px' }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
