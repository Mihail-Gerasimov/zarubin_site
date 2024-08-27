import Link from 'next/link';
import styles from './Privacy.module.css';
import { list } from 'postcss';

export const Privacy = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Privacy policy</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h2 className={styles.listTitle}>1. General provisions.</h2>
          <p className={styles.description}>
            {`This Personal data processing policy is compiled in accordance with
            the requirements of Federal Law No. 152-FZ of 27.07.2006 "On
            Personal Data" (hereinafter referred to as the Personal Data Law)
            and defines the procedure for processing personal data and measures
            to ensure the security of personal data taken by Digital Buro
            (hereinafter referred to as the Operator).`}
          </p>
          <ul>
            <li className={styles.item}>
              <p className={styles.description}>
                1.1. The Operator sets as its most important goal and condition
                for the implementation of its activities the observance of the
                rights and freedoms of man and citizen in the processing of his
                personal data, including the protection of the rights to
                privacy, personal and family secrets.
              </p>
            </li>
            <li className={styles.item}>
              <p className={styles.description}>
                {`1.2. This Operator's policy regarding the processing of personal
                data (hereinafter referred to as the Policy) applies to all
                information that the Operator can receive about website visitors `}
                <Link className={styles.link} href={'/'}>
                  https://www.zarubin.co.uk/
                </Link>
              </p>
            </li>
          </ul>
        </li>
        <li className={styles.item}>
          <h2 className={styles.listTitle}>
            2. Basic concepts used in Politics.
          </h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <p className='description'>
                2.1. Automated processing of personal data – processing of
                personal data using computer technology.
              </p>
            </li>
            <li className={styles.item}>
              <p className='description'>
                2.2. Blocking of personal data – temporary termination of
                processing of personal data (except in cases where processing is
                necessary to clarify personal data).
              </p>
            </li>
            <li className={styles.item}>
              <p className='description'>
                2.3. Website - a set of graphic and informational materials, as
                well as computer programs and databases that ensure their
                availability on the Internet at a network address{' '}
                <Link className={styles.link} href={'/'}>
                  https://www.zarubin.co.uk/
                </Link>
              </p>
            </li>
            <li className={styles.item}>
              <p className='description'>
                2.4. Personal data information system — a set of personal data
                contained in databases, and information technologies and
                technical means that ensure their processing.
              </p>
            </li>
            <li className={styles.item}>
              <p className='description'>
                2.5. Depersonalization of personal data — actions as a result of
                which it is impossible to determine, without the use of
                additional information, the ownership of personal data to a
                specific User or other subject of personal data.
              </p>
            </li>
            <li className={styles.item}>
              <p className='description'>
                2.6. Personal data processing – any action (operation) or set of
                actions (operations) performed with or without the use of
                automation tools with personal data, including collection,
                recording, systematization, accumulation, storage, clarification
                (updating, modification), extraction, use, transfer
                (distribution, provision, access), depersonalization, blocking,
                deletion, destruction of personal data.
              </p>
            </li>
            <li className={styles.item}>
              <p className='description'>
                2.7. Operator – a state body, municipal body, legal entity or
                individual, independently or jointly with other persons
                organizing and (or) processing personal data, as well as
                determining the purposes of processing personal data, the
                composition of personal data to be processed, actions
                (operations) performed with personal data.
              </p>
            </li>
            <li className={styles.item}>
              <p className='description'>
                2.1. Automated processing of personal data – processing of
                personal data using computer technology.
              </p>
            </li>
            <li className={styles.item}>
              <p className='description'>
                2.1. Automated processing of personal data – processing of
                personal data using computer technology.
              </p>
            </li>
            <li className={styles.item}>
              <p className='description'>
                2.1. Automated processing of personal data – processing of
                personal data using computer technology.
              </p>
            </li>
            <li className={styles.item}>
              <p className='description'>
                2.1. Automated processing of personal data – processing of
                personal data using computer technology.
              </p>
            </li>
            <li className={styles.item}>
              <p className='description'>
                2.1. Automated processing of personal data – processing of
                personal data using computer technology.
              </p>
            </li>
            <li className={styles.item}>
              <p className='description'>
                2.1. Automated processing of personal data – processing of
                personal data using computer technology.
              </p>
            </li>
            <li className={styles.item}>
              <p className='description'>
                2.1. Automated processing of personal data – processing of
                personal data using computer technology.
              </p>
            </li>
          </ul>
        </li>
        <li className={styles.item}>
          <h2 className={styles.listTitle}>
            3. Basic rights and obligations of the Operator.
          </h2>
        </li>
        <li className={styles.item}>
          <h2 className={styles.listTitle}>
            4. Basic rights and obligations of personal data subjects.
          </h2>
        </li>
        <li className={styles.item}>
          <h2 className={styles.listTitle}>
            5. The Operator may process the following personal data of the User.
          </h2>
        </li>
        <li className={styles.item}>
          <h2 className={styles.listTitle}>
            6. Principles of personal data processing.
          </h2>
        </li>
        <li className={styles.item}>
          <h2 className={styles.listTitle}>
            7. Purposes of personal data processing.
          </h2>
        </li>
        <li className={styles.item}>
          <h2 className={styles.listTitle}>
            8. Legal grounds for processing personal data.
          </h2>
        </li>
        <li className={styles.item}>
          <h2 className={styles.listTitle}>
            9. Terms of personal data processing.
          </h2>
        </li>
        <li className={styles.item}>
          <h2 className={styles.listTitle}>
            10. The procedure for the collection, storage, transfer and other
            types of processing of personal data.
          </h2>
        </li>
        <li className={styles.item}>
          <h2 className={styles.listTitle}>11. List of actions performed.</h2>
        </li>
        <li className={styles.item}>
          <h2 className={styles.listTitle}>
            12. Cross-border transfer of personal data.
          </h2>
        </li>
        <li className={styles.item}>
          <h2 className={styles.listTitle}>
            13. Confidentiality of personal data.
          </h2>
        </li>
        <li className={styles.item}>
          <h2 className={styles.listTitle}>14. Final provisions.</h2>
        </li>
      </ul>
    </div>
  );
};
