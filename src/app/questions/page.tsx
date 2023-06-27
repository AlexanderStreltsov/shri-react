'use client';

import { AccordionProvider } from '@/contexts/accordion-context';
import { Accordion } from '@/ui/accordion/accordion';
import { accordionData } from '@/utils/accordion-data';
import { QUESTIONS_TITLE } from '@/utils/text';

import styles from './page.module.scss';

export default function Questions() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>
        <h1>{QUESTIONS_TITLE}</h1>
      </div>
      <ul className={styles.list}>
        <AccordionProvider>
          {accordionData.map(({ title, text }, index) => (
            <li key={index}>
              <Accordion title={title} text={text} />
            </li>
          ))}
        </AccordionProvider>
      </ul>
    </section>
  );
}
