import type { Metadata } from 'next';

import '@/shared/styles/globals.css';
import { roboto } from '@/shared/lib/fonts';
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
      <body className={`${roboto.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
