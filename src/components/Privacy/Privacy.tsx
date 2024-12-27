import { BASE_URL } from '@/src/utils/alias';
import Link from 'next/link';
import { Section } from '../shared/Section/Section';
import styles from './Privacy.module.css';

export const Privacy = () => {
  return (
    <Section light>
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
            <ul className={styles.subList}>
              <li className={styles.item}>
                <p className={styles.description}>
                  1.1. The Operator sets as its most important goal and
                  condition for the implementation of its activities the
                  observance of the rights and freedoms of man and citizen in
                  the processing of his personal data, including the protection
                  of the rights to privacy, personal and family secrets.
                </p>
              </li>
              <li className={styles.item}>
                <p className='description'>
                  {`1.2. This Operator's policy regarding the processing of personal
                data (hereinafter referred to as the Policy) applies to all
                information that the Operator can receive about website visitors `}
                  <Link className={styles.link} href={'/'}>
                    {BASE_URL}
                  </Link>
                </p>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <h2 className={styles.listTitle}>
              2. Basic concepts used in Politics.
            </h2>
            <ul className={styles.subList}>
              <li className={styles.item}>
                <p className='description'>
                  2.1. Automated processing of personal data – processing of
                  personal data using computer technology.
                </p>
              </li>
              <li className={styles.item}>
                <p className='description'>
                  2.2. Blocking of personal data – temporary termination of
                  processing of personal data (except in cases where processing
                  is necessary to clarify personal data).
                </p>
              </li>
              <li className={styles.item}>
                <p className='description'>
                  2.3. Website - a set of graphic and informational materials,
                  as well as computer programs and databases that ensure their
                  availability on the Internet at a network address{' '}
                  <Link className={styles.link} href={'/'}>
                    {BASE_URL}
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
                  2.5. Depersonalization of personal data — actions as a result
                  of which it is impossible to determine, without the use of
                  additional information, the ownership of personal data to a
                  specific User or other subject of personal data.
                </p>
              </li>
              <li className={styles.item}>
                <p className='description'>
                  2.6. Personal data processing – any action (operation) or set
                  of actions (operations) performed with or without the use of
                  automation tools with personal data, including collection,
                  recording, systematization, accumulation, storage,
                  clarification (updating, modification), extraction, use,
                  transfer (distribution, provision, access), depersonalization,
                  blocking, deletion, destruction of personal data.
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
                  2.8. Personal data – any information related directly or
                  indirectly to a specific or identifiable User of the Website{' '}
                  <Link className={styles.link} href={'/'}>
                    {BASE_URL}
                  </Link>
                </p>
              </li>
              <li className={styles.item}>
                <p className='description'>
                  2.9. Personal data authorized by the subject of personal data
                  for distribution - personal data to which an unlimited number
                  of persons have access by the subject of personal data by
                  giving consent to the processing of personal data authorized
                  by the subject of personal data for distribution in accordance
                  with the procedure provided for by the Law on Personal Data
                  (hereinafter - personal data authorized for distribution).
                </p>
              </li>
              <li className={styles.item}>
                <p className='description'>
                  2.10. User – any visitor to the website{' '}
                  <Link className={styles.link} href={'/'}>
                    {BASE_URL}
                    {BASE_URL}
                  </Link>
                </p>
              </li>
              <li className={styles.item}>
                <p className='description'>
                  2.11. Provision of personal data – actions aimed at disclosure
                  of personal data to a certain person or a certain circle of
                  persons.
                </p>
              </li>
              <li className={styles.item}>
                <p className='description'>
                  2.12. Dissemination of personal data – any actions aimed at
                  disclosure of personal data to an indefinite circle of persons
                  (transfer of personal data) or familiarization with personal
                  data of an unlimited circle of persons, including the
                  publication of personal data in the media, placement in
                  information and telecommunications networks or providing
                  access to personal data in any other way.
                </p>
              </li>
              <li className={styles.item}>
                <p className='description'>
                  2.13. Cross–border transfer of personal data - transfer of
                  personal data to the territory of a foreign state to the
                  authority of a foreign state, a foreign individual or a
                  foreign legal entity.
                </p>
              </li>
              <li className={styles.item}>
                <p className='description'>
                  2.14. Destruction of personal data – any actions as a result
                  of which personal data is permanently destroyed with the
                  impossibility of further restoration of the content of
                  personal data in the personal data information system and (or)
                  the material carriers of personal data are destroyed.
                </p>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <h2 className={styles.listTitle}>
              3. Basic rights and obligations of the Operator.
            </h2>
            <ul className={styles.subList}>
              <li className={styles.item}>
                <p className={styles.description}>
                  3.1. The Operator has the right to:
                </p>
                <p className={styles.description}>
                  – receive reliable information and/or documents containing
                  personal data from the subject of personal data;
                </p>
                <p className={styles.description}>
                  – if the subject of personal data withdraws consent to the
                  processing of personal data, the Operator has the right to
                  continue processing personal data without the consent of the
                  subject of personal data if there are grounds specified in the
                  Law on Personal Data;
                </p>
                <p className={styles.description}>
                  – independently determine the composition and list of measures
                  necessary and sufficient to ensure the fulfillment of
                  obligations provided for by the Law on Personal Data and
                  regulatory legal acts adopted in accordance with it, unless
                  otherwise provided by the Law on Personal Data or other
                  federal laws.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.description}>
                  3.2. The Operator is obliged to:
                </p>
                <p className={styles.description}>
                  – to provide the subject of personal data, at his request,
                  with information concerning the processing of his personal
                  data;
                </p>
                <p className={styles.description}>
                  – organize the processing of personal data in accordance with
                  the procedure established by the current legislation of the
                  Russian Federation;
                </p>
                <p className={styles.description}>
                  – respond to requests and requests from personal data subjects
                  and their legal representatives in accordance with the
                  requirements of the Personal Data Law;
                </p>
                <p className={styles.description}>
                  – to inform the authorized body for the protection of the
                  rights of personal data subjects at the request of this body
                  of the necessary information within 30 days from the date of
                  receipt of such a request;
                </p>
                <p className={styles.description}>
                  – publish or otherwise provide unrestricted access to this
                  Policy regarding the processing of personal data;
                </p>
                <p className={styles.description}>
                  – take legal, organizational and technical measures to protect
                  personal data from unauthorized or accidental access to them,
                  destruction, modification, blocking, copying, provision,
                  dissemination of personal data, as well as from other illegal
                  actions with respect to personal data;
                </p>
                <p className={styles.description}>
                  – stop the transfer (distribution, provision, access) of
                  personal data, stop processing and destroy personal data in
                  the manner and cases provided for by the Law on Personal Data;
                </p>
                <p className={styles.description}>
                  – perform other duties provided for by the Law on Personal
                  Data.
                </p>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <h2 className={styles.listTitle}>
              4. Basic rights and obligations of personal data subjects.
            </h2>
            <ul className={styles.subList}>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  4.1. Personal data subjects have the right to:
                </p>
                <p className={styles.deletion}>
                  – receive information concerning the processing of his
                  personal data, except in cases provided for by federal laws.
                  The information is provided to the personal data subject by
                  the Operator in an accessible form, and it should not contain
                  personal data related to other personal data subjects, except
                  in cases where there are legitimate grounds for disclosure of
                  such personal data. The list of information and the procedure
                  for obtaining it is established by the Law on Personal Data;
                </p>
                <p className={styles.deletion}>
                  – require the operator to clarify his personal data, block or
                  destroy them if the personal data are incomplete, outdated,
                  inaccurate, illegally obtained or are not necessary for the
                  stated purpose of processing, as well as take measures
                  provided by law to protect their rights;
                </p>
                <p className={styles.deletion}>
                  – to put forward a condition of prior consent when processing
                  personal data in order to promote goods, works and services on
                  the market;
                </p>
                <p className={styles.deletion}>
                  – to revoke consent to the processing of personal data;
                </p>
                <p className={styles.deletion}>
                  – appeal to the authorized body for the protection of the
                  rights of personal data subjects or in court against illegal
                  actions or inaction of the Operator when processing his
                  personal data;
                </p>
                <p className={styles.deletion}>
                  – to exercise other rights provided for by the legislation of
                  the Russian Federation.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  4.2. Personal data subjects are obliged to:
                </p>
                <p className={styles.deletion}>
                  – provide the Operator with reliable data about themselves;
                </p>
                <p className={styles.deletion}>
                  – inform the Operator about the clarification (update, change)
                  of their personal data.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  {`4.3. Persons who have provided the Operator with false
                information about themselves or information about another
                personal data subject without the latter's consent are liable in
                accordance with the legislation of the Russian Federation.`}
                </p>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <h2 className={styles.listTitle}>
              5. The Operator may process the following personal data of the
              User.
            </h2>
            <ul className={styles.subList}>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  5.1. Personal data subjects have the right to:
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>5.2. Email address.</p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>5.3. Phone numbers.</p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  5.4. Also on site is the collection and processing of
                  anonymous data about visitors (including cookies) using
                  Internet statistics (Yandex Metric and Google Analytics and
                  others).
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  5.5. The above data, hereinafter referred to in the text of
                  the Policy, are combined by the general concept of Personal
                  Data.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  5.6. Processing of special categories of personal data
                  relating to race, nationality, political views, religious or
                  philosophical beliefs, intimate life is not carried out by the
                  Operator.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  5.7. Processing of personal data permitted for distribution
                  from among the special categories of personal data specified
                  in Part 1 of Article 10 of the Law on Personal Data is allowed
                  if the prohibitions and conditions provided for in Article
                  10.1 of the Law on Personal Data are observed.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  {`5.8. The User's consent to the processing of personal data
                permitted for distribution is issued separately from other
                consents to the processing of his personal data. At the same
                time, the conditions stipulated, in particular, by Article 10.1
                of the Law on Personal Data are observed. The requirements for
                the content of such consent are established by the authorized
                body for the protection of the rights of personal data subjects.`}
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  5.8.1 Consent to the processing of personal data authorized
                  for distribution, the User provides the Operator directly.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  {`5.8.2 The Operator is obliged, no later than three working days
                from the date of receipt of the User's consent, to publish
                information on the processing conditions, on the existence of
                prohibitions and conditions for processing by an unlimited
                number of persons of personal data allowed for distribution.`}
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  5.8.3 The transfer (distribution, provision, access) of
                  personal data authorized by the personal data subject for
                  distribution must be terminated at any time at the request of
                  the personal data subject. This requirement must include the
                  surname, first name, patronymic (if any), contact information
                  (phone number, email address or postal address) of the
                  personal data subject, as well as a list of personal data
                  whose processing is subject to termination. The personal data
                  specified in this request can only be processed by the
                  Operator to whom it is sent.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  5.8.4 Consent to the processing of personal data permitted for
                  distribution shall cease to be valid from the moment the
                  Operator receives the request specified in clause 5.8.3 of
                  this Policy regarding the processing of personal data.
                </p>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <h2 className={styles.listTitle}>
              6. Principles of personal data processing.
            </h2>
            <ul className={styles.subList}>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  6.1. Personal data processing is carried out on a legal and
                  fair basis.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  6.2. The processing of personal data is limited to the
                  achievement of specific, predetermined and legitimate goals.
                  Processing of personal data incompatible with the purposes of
                  personal data collection is not allowed.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  6.3. It is not allowed to combine databases containing
                  personal data, the processing of which is carried out for
                  purposes incompatible with each other.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  6.4. Only personal data that meet the purposes of their
                  processing are subject to processing.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  6.5. The content and volume of the processed personal data
                  correspond to the stated purposes of processing. Redundancy of
                  the processed personal data in relation to the stated purposes
                  of their processing is not allowed.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  6.6. When processing personal data, the accuracy of personal
                  data, their sufficiency, and, if necessary, relevance in
                  relation to the purposes of personal data processing is
                  ensured. The Operator takes the necessary measures and/or
                  ensures that they are taken to delete or clarify incomplete or
                  inaccurate data.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  6.7. The storage of personal data is carried out in a form
                  that allows determining the subject of personal data, no
                  longer than the purposes of personal data processing require,
                  unless the storage period of personal data is established by
                  federal law, an agreement to which the subject of personal
                  data is a party, beneficiary or guarantor. The processed
                  personal data is destroyed or depersonalized upon achievement
                  of the processing goals or in case of loss of the need to
                  achieve these goals, unless otherwise provided by federal law.
                </p>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <h2 className={styles.listTitle}>
              7. Purposes of personal data processing.
            </h2>
            <ul className={styles.subList}>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  {`7.1. The purpose of processing the User's personal data:`}{' '}
                </p>
                <ul>
                  <li>– informing the User by sending emails;</li>
                  <li>
                    – conclusion, execution and termination of civil law
                    contracts.
                  </li>
                </ul>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  {`7.2. The Operator also has the right to send notifications to
                the User about new products and services, special offers and
                various events. The User can always refuse to receive
                informational messages by sending an email to the Operator
                help@digitalburo.tech marked "Refusal of notifications about new
                products and services and special offers".`}
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  7.3. Depersonalized User data collected using Internet
                  statistics services are used to collect information about User
                  actions on the site, improve the quality of the site and its
                  contents.
                </p>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <h2 className={styles.listTitle}>
              8. Legal grounds for processing personal data.
            </h2>
            <ul className={styles.subList}>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  8.1. The legal grounds for processing personal data by the
                  Operator are:{' '}
                </p>
                <ul>
                  <li>
                    – contracts concluded between the operator and the subject
                    of personal data;
                  </li>
                  <li>
                    – federal laws and other regulatory legal acts in the field
                    of personal data protection;
                  </li>
                  <li>
                    – consent of Users to the processing of their personal data,
                    to the processing of personal data allowed for distribution.
                  </li>
                </ul>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  {`8.2. The Operator processes the User's personal data only if
                they are filled in and/or sent by the User independently through
                special forms located on the website`}{' '}
                  <Link className={styles.link} href='/'>
                    {BASE_URL}
                  </Link>{' '}
                  {`or
                sent to the Operator via e-mail. By filling out the appropriate
                forms and/or sending their personal data to the Operator, the
                User agrees with this Policy.`}
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  {`8.3. The Operator processes depersonalized data about the User
                if this is allowed in the User's browser settings (the saving of
                cookies and the use of JavaScript technology are enabled).`}
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  8.4. The subject of personal data independently decides on the
                  provision of his personal data and gives consent freely, of
                  his own free will and in his own interest.
                </p>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <h2 className={styles.listTitle}>
              9. Terms of personal data processing.
            </h2>
            <ul className={styles.subList}>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  9.1. The processing of personal data is carried out with the
                  consent of the personal data subject to the processing of his
                  personal data.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  9.2. The processing of personal data is necessary to achieve
                  the goals stipulated by an international agreement of the
                  Russian Federation or a law, to carry out the functions,
                  powers and duties assigned to the operator by the legislation
                  of the Russian Federation.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  9.3. The processing of personal data is necessary for the
                  administration of justice, the execution of a judicial act, an
                  act of another body or official subject to execution in
                  accordance with the legislation of the Russian Federation on
                  enforcement proceedings.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  9.4. The processing of personal data is necessary for the
                  execution of a contract to which the personal data subject is
                  a party or beneficiary or guarantor, as well as for the
                  conclusion of a contract on the initiative of the personal
                  data subject or a contract under which the personal data
                  subject will be a beneficiary or guarantor.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  9.5. The processing of personal data is necessary to exercise
                  the rights and legitimate interests of the operator or third
                  parties or to achieve socially significant goals, provided
                  that the rights and freedoms of the personal data subject are
                  not violated.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  9.6. Processing of personal data is carried out, access of an
                  unlimited number of persons to which is provided by the
                  subject of personal data or at his request (hereinafter
                  referred to as publicly available personal data).
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  9.7. Processing of personal data subject to publication or
                  mandatory disclosure in accordance with federal law is carried
                  out.
                </p>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <h2 className={styles.listTitle}>
              10. The procedure for the collection, storage, transfer and other
              types of processing of personal data.
            </h2>
            <ul className={styles.subList}>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  The security of personal data processed by the Operator is
                  ensured through the implementation of legal, organizational
                  and technical measures necessary to fully comply with the
                  requirements of current legislation in the field of personal
                  data protection.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  10.1. The Operator ensures the safety of personal data and
                  takes all possible measures to exclude access to the personal
                  data of unauthorized persons.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  {`10.2. The User's personal data will never, under any
                circumstances, be transferred to third parties, except in cases
                related to the implementation of current legislation or if the
                subject of personal data has given consent to the Operator to
                transfer data to a third party to fulfill obligations under a
                civil contract.`}
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  {`10.3. In case of inaccuracies in personal data, the User can
                update them independently by sending a notification to the
                Operator to the Operator's email address help@digitalburo.tech
                marked "Updating of personal data".`}
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  {`10.4. The term of processing of personal data is determined by
                the achievement of the purposes for which personal data was
                collected, unless another term is provided for by the contract
                or current legislation. The User can withdraw his consent to the
                processing of personal data at any time by sending a
                notification to the Operator via e-mail to the Operator's e-mail
                address help@digitalburo.tech marked "Withdrawal of consent to
                the processing of personal data".`}
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  10.5. All information collected by third-party services,
                  including payment systems, means of communication and other
                  service providers, is stored and processed by these persons
                  (Operators) in accordance with their User Agreement and
                  Privacy Policy. The subject of personal data and/or the User
                  is obliged to familiarize themselves with these documents in a
                  timely manner. The Operator is not responsible for the actions
                  of third parties, including the service providers specified in
                  this paragraph.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  10.6. The prohibitions established by the subject of personal
                  data on the transfer (except for granting access), as well as
                  on the processing or processing conditions (except for
                  obtaining access) of personal data permitted for distribution,
                  do not apply in cases of processing of personal data in the
                  state, public and other public interests defined by the
                  legislation of the Russian Federation.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  10.7. When processing personal data, the Operator ensures the
                  confidentiality of personal data.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  10.8. The Operator stores personal data in a form that allows
                  determining the subject of personal data, no longer than the
                  purposes of personal data processing require, unless the
                  period of personal data storage is established by federal law,
                  an agreement to which the subject of personal data is a party,
                  beneficiary or guarantor.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  10.9. The condition for the termination of personal data
                  processing may be the achievement of the purposes of personal
                  data processing, the expiration of the consent of the personal
                  data subject or the withdrawal of consent by the personal data
                  subject, as well as the identification of unlawful processing
                  of personal data.
                </p>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <h2 className={styles.listTitle}>11. List of actions performed.</h2>
            <ul className={styles.subList}>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  11.1. The Operator collects, records, systematizes,
                  accumulates, stores, clarifies (updates, changes), extracts,
                  uses, transfers (distribution, provision, access),
                  depersonalizes, blocks, deletes and destroys personal data.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  11.2. The Operator performs automated processing of personal
                  data with or without receiving and/or transmitting the
                  received information via information and telecommunication
                  networks.
                </p>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <h2 className={styles.listTitle}>
              12. Cross-border transfer of personal data.
            </h2>
            <ul className={styles.subList}>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  12.1. Before the start of the cross-border transfer of
                  personal data, the Operator is obliged to make sure that the
                  foreign state to whose territory the transfer of personal data
                  is supposed to be carried out provides reliable protection of
                  the rights of personal data subjects.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  12.2. Cross-border transfer of personal data on the territory
                  of foreign states that do not meet the above requirements may
                  be carried out only if there is written consent of the
                  personal data subject to cross-border transfer of his personal
                  data and/or execution of the contract to which the personal
                  data subject is a party.
                </p>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <h2 className={styles.listTitle}>
              13. Confidentiality of personal data.
            </h2>
            <p className={styles.deletion}>
              The operator and other persons who have gained access to personal
              data are obliged not to disclose to third parties and not to
              distribute personal data without the consent of the subject of
              personal data, unless otherwise provided by federal law.
            </p>
          </li>
          <li className={styles.item}>
            <h2 className={styles.listTitle}>14. Final provisions.</h2>
            <ul className={styles.subList}>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  14.1. The User can receive any clarifications on issues of
                  interest concerning the processing of his personal data by
                  contacting the Operator via e-mail help@digitalburo.tech.
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  {` 14.2. This document will reflect any changes to the Operator's
                personal data processing policy. The policy is valid
                indefinitely until it is replaced by a new version.`}
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.deletion}>
                  14.3. The current version of the Policy is freely available on
                  the Internet at{' '}
                  <Link className={styles.link} href='/policy'>
                    {`${BASE_URL}/policy`}
                  </Link>
                  .
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Section>
  );
};
