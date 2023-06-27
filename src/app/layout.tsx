import { Roboto } from 'next/font/google';

import { StoreProvider } from '@/redux/store-provider';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';

import './globals.scss';
import styles from './layout.module.scss';

const roboto = Roboto({
  weight: ['400'],
  subsets: ['cyrillic', 'latin'],
});

export const metadata = {
  title: 'ШРИ React',
  description: 'Домашнее задание "Реакт"',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <StoreProvider>
          <div id="modals"></div>
          <div className={styles.layout}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
