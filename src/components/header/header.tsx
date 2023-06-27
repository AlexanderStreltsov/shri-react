'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { useAppSelector as useSelector } from '@/redux/hooks';
import { selectAllTicketCount } from '@/redux/features/cart/selector';
import { Icon } from '@/ui/icon/icon';
import { LOGO_TITLE } from '@/utils/text';
import { Badge } from '@/ui/badge/badge';

import styles from './header.module.scss';

export const Header: FC = () => {
  const pathname = usePathname();

  const count = useSelector((state) => selectAllTicketCount(state));

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            {pathname !== '/' ? (
              <Link href="/">{LOGO_TITLE}</Link>
            ) : (
              <span>{LOGO_TITLE}</span>
            )}
          </li>
          <li className={styles.cart}>
            {!!count && <Badge count={count} />}
            <Link href="/cart">
              <Icon type="basket" size={32} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
