'use client';

import { FC } from 'react';
import Link from 'next/link';

import { QUESTIONS_TITLE, ABOUT_TITLE } from '@/utils/text';

import styles from './footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul>
          <li>
            <Link href="/questions">{QUESTIONS_TITLE}</Link>
          </li>
          <li>
            <Link href="/about">{ABOUT_TITLE}</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
