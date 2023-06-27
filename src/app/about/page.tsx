import { aboutUs } from '@/utils/about-us-text';
import { ABOUT_TITLE } from '@/utils/text';

import styles from './page.module.scss';

export default function AboutUs() {
  return (
    <section className={styles.wrapper}>
      <h1>{ABOUT_TITLE}</h1>

      {aboutUs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </section>
  );
}
