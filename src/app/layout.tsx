import type { Metadata } from 'next';

import '@/shared/styles/globals.css';
import { roboto, helveticaneue } from '@/shared/lib/fonts';

import Header from '@/shared/components/Header';

export const metadata: Metadata = {
  title: 'BeTalent',
  description: 'ERP - Enterprise Resource Planning',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${helveticaneue.variable} ${roboto.variable} antialiased`}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
