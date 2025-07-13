import { type Config } from 'tailwindcss';
import { theme } from '@/shared/styles/theme';

const config = {
  content: ['./src/**/*.{js, ts, jsx, tsx, mdx}'],

  theme: {
    extend: {
      ...theme,
    },
  },
} satisfies Config;

export default config;
