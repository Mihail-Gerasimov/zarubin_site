'use client';

import Arrow from '@/public/assets/images/icons/link_arrow.svg';
import { useFormik } from 'formik';
import styles from './Form.module.css';
import { useDropzone } from 'react-dropzone';
import { useCallback } from 'react';
import { DropzoneIcon } from '@/src/components/svg/DropzoneIcon';
import classNames from 'classnames';

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      cv: null,
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    formik.setFieldValue('cv', acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <div className={styles.formWrapper}>
      <h3 className={styles.title}>
        Fill out the form and click the blue button to get in touch with you!
      </h3>
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
        <div
          className={classNames(
            'rounded-[5px] border-[1px] border-dashed px-[20px] py-[40px]',
            isDragActive ? 'border-white' : 'border-main-blue-hover',
          )}
          {...getRootProps()}
        >
          <div className='flex items-center justify-between'>
            <label className='text-[16px] text-[#8D94AD]'>Drop your CV</label>
            <DropzoneIcon />
          </div>
          <input {...getInputProps()} />
        </div>
        <button type='submit' className={styles.formBtn}>
          Blue button
          <Arrow className={styles.arrow} />
        </button>
      </form>
    </div>
  );
};
