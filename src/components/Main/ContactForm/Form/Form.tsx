'use client';

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
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
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
          <input
            type='tel'
            name='phone'
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
