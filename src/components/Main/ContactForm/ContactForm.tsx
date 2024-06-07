import author from '@/public/assets/images/main/author.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ContactForm.module.css';
import { Form } from './Form/Form';

export const ContactForm = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          We are always glad to have new partners and ambitious tasks.
        </h2>
        <div className={styles.subContent}>
          <div className={styles.authorWrapper}>
            <Image
              src={author}
              width={120}
              height={120}
              alt='author'
              className={styles.image}
            />
            <div className={styles.quoteWrapper}>
              <p className={styles.author}>Vitaly Z.</p>
              <span className={styles.quote}>
                «The road arises under the steps of walking»
              </span>
            </div>
          </div>
          <Link href='mailto:hello@digitalburo.tech' className={styles.email}>
            hello@digitalburo.tech
          </Link>
        </div>
      </div>
      <div className={styles.formWrapper}>
        <Form />
      </div>
    </div>
  );
};
