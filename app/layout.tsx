import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';
import { BodyWrapper } from '@/components/layout/body-wrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Moema | Guia de Bairros - Lopes',
  description: 'Conheça Moema, um dos bairros mais queridos de São Paulo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <BodyWrapper className={inter.className}>
        <Providers>{children}</Providers>
      </BodyWrapper>
    </html>
  );
}