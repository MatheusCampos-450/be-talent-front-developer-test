import type { Metadata } from 'next';

import './globals.css';
import { roboto } from '@/shared/lib/fonts';

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
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
