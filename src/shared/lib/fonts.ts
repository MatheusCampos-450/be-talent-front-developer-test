import localFont from 'next/font/local';
import { Roboto } from 'next/font/google';

export const helveticaneue = localFont({
  src: [
    {
      path: './helveticaneue/helveticaneue.woff2',
      style: 'normal',
      weight: '500',
    },
    {
      path: './helveticaneue/helveticaneue.woff2',
      style: 'normal',
      weight: '400',
    },
  ],
  variable: '--font-helveticaneue',
});

export const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-roboto',
});
