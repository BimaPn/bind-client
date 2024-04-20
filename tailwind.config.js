/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors : {
          dark : '#0D0D0D',
          semiDark : '#6B7280',
          netral : '#9CA3AF',
          semiLight : '#F2F2F2',
          light : '#FFFFFF',
          d_dark : '#181818',
          d_semiDark : '#212121',
          d_netral : '#3d3d3d',
          d_semiLight : '#aaaaaa',
          d_light : '#F1F1F1'
        }
    },
    screens : {
      ssm : "352px",
      xs : "480px",
      ss : "543px",
      sm : "768px",
      md : "1024px",
      lg : "1280px",
      xl : "1440px",
      xxl : "1700px"
    }
  },
  plugins: [],
}
