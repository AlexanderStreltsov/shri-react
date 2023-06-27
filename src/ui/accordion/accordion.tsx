import { type FC, useRef, useState, useEffect } from 'react';

import { useAccordion } from '@/contexts/accordion-context';
import { Button } from '@/ui/button/button';
import { Icon } from '@/ui/icon/icon';

import styles from './accordion.module.scss';

interface IAccordion {
  title: string;
  text: string;
}

export const Accordion: FC<IAccordion> = ({ title, text }) => {
  const { active, switchAccordion } = useAccordion();

  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const isActive = active === title;

  useEffect(() => {
    if (isActive) {
      const contentEl = contentRef.current as HTMLDivElement;
      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isActive]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header} onClick={() => switchAccordion(title)}>
        <h2 className={styles.title}>{title}</h2>
        <Button type="transparent" isIcon>
          <span className={`${styles.icon} ${isActive && styles.iconActive}`}>
            <Icon type="arrow" size={32} />
          </span>
        </Button>
      </div>
      <div className={styles.content} style={{ height }}>
        {isActive && (
          <div className={styles.text} ref={contentRef}>
            {text}
          </div>
        )}
      </div>
    </div>
  );
};
