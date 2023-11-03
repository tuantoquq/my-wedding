import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './{app,hooks,pages,components,layout,libs}/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'secondary-cl': '#3e7884',
        'primary-cl': '#f5fffe',
        'secondary-cl-2': '#dcf5f2',
      },
    },
  },
  plugins: [],
};
export default config;
