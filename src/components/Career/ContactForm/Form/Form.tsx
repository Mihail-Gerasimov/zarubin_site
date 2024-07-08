'use client';

import { DropzoneIcon } from '@/src/components/svg/DropzoneIcon';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './Form.module.css';

type Inputs = {
  name: string;
  email: string;
  phone: string;
  cv: File | null;
};

export const Form = () => {
  const formik = useFormik<Inputs>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      cv: null,
    },
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        if (typeof values[key as keyof typeof values] === 'string') {
          formData.append(key, values[key as keyof typeof values] as string);
        } else {
          formData.append(key, values[key as keyof typeof values] as File);
        }
      });

      const response = await fetch(
        'https://wild-term-a5e5.access-f8d.workers.dev/',
        {
          method: 'POST',
          body: formData,
        },
      ).then((r) => r.json());

      if (!response.error) {
        resetForm();
        alert('Thank you! We will contact you soon');
      } else {
        console.log(response);
      }
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
            <label className='text-[26px] text-[#8D94AD]'>
              {formik.values.cv?.name || 'Drop your CV'}
            </label>
            <DropzoneIcon />
          </div>
          <input {...getInputProps()} />
        </div>
        <button type='submit' className={styles.formBtn}>
          Blue button
        </button>
      </form>
    </div>
  );
};
