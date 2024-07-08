'use client';

import { InputMask } from '@react-input/mask';
import { useFormik } from 'formik';
import styles from './Form.module.css';

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      details: '',
    },
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      Object.keys(values).forEach((key) =>
        formData.append(key, values[key as keyof typeof values]),
      );

      const response = await fetch(
        'https://wild-term-a5e5.access-f8d.workers.dev/',
        {
          method: 'POST',
          body: formData,
        },
      ).then((r) => r.json());

      if (!response.error) {
        const telegramResponse = await fetch(
          'https://api.telegram.org/bot6992822983:AAHWVJuwqeVl5kscHuZwcPx5W-IPXJ7mpkk/sendMessage',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: '199942509',
              text: `
              Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nDetails: ${values.details}
            `,
            }),
          },
        ).then((r) => r.json());

        if (telegramResponse.ok) {
          resetForm();
          alert('Thank you! We will contact you soon');
        } else {
          console.error('Error sending message to Telegram:', telegramResponse);
        }
      } else {
        console.error('Error sending form data:', response);
      }
    },
  });

  return (
    <div className='w-full rounded-[12px] bg-[--second-blue] p-[40px]'>
      <div className='font-unbound text-[32px] font-semibold leading-[37px] text-white'>
        Fill out the form and click the blue button to get in touch with you!
      </div>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <label className={styles.label}>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={formik.values.name}
            required
            className={styles.input}
            onChange={formik.handleChange}
          />
        </label>
        <label className={styles.label}>
          <input
            type='email'
            name='email'
            value={formik.values.email}
            placeholder='E-mail'
            className={styles.input}
            required
            onChange={formik.handleChange}
          />
        </label>
        <label className={styles.label}>
          <InputMask
            type='tel'
            name='phone'
            mask='____________________'
            replacement={{
              _: /[0-9]/,
            }}
            value={formik.values.phone}
            placeholder='Phone'
            className={styles.input}
            required
            onChange={formik.handleChange}
          />
        </label>
        <label className={styles.label}>
          <textarea
            name='details'
            value={formik.values.details}
            placeholder='Project details'
            className={styles.input}
            onChange={formik.handleChange}
            required
          />
        </label>
        <button type='submit' className={styles.formBtn}>
          Blue button
          {/* <Arrow className={styles.arrow} /> */}
        </button>
      </form>
    </div>
  );
};
