import MainAppBar from '@/components/app-bar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../styles/global.scss';
import StoreProvider from './store-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eteration App',
  description: 'Eteration Case Study',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <StoreProvider>
          <div id='eteration-body' className={inter.className}>
            <MainAppBar />
            {children}
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
