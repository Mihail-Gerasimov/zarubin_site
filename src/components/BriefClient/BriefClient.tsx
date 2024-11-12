'use client';

import { useFormik } from 'formik';
import { StartedComponent } from './StartedComponent/StartedComponent';
import { NextBackButton } from './NextBackButton/NextBackButton';
import { initialData, initialFormikValue } from './briefData';
import { validate } from '@/src/utils/validate/validate';
import { QuestionComponent } from './QuestionComponent/QuestionQomponent';
import { useQuestion } from '../Contexts/QuestionContext';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { DateTime } from 'luxon';

export const BriefClient = () => {
  const { page: pageInfo, handleSetPage } = useQuestion();
  const [selectedDate, selectDate] = useState(DateTime.now());

  const formik = useFormik({
    initialValues: initialFormikValue,
    validate,
    onSubmit: (values) => {
      console.log('FORMDATA', values);
    },
  });

  const handleBack = () => {
    if (pageInfo === 0) return;
    handleSetPage(pageInfo - 1);
  };

  const handleNext = () => {
    if (pageInfo === initialData.length) {
      return formik.handleSubmit();
    }
    handleSetPage(pageInfo + 1);
  };

  const handleChange = (id: string, value: string) => {
    console.log('ID', id);
    formik.setFieldValue(id, value);
  };

  return (
    <div className='mx-[auto] flex w-full max-w-[860px] flex-col items-center desktop:text-[28px] desktop:leading-[1.14]'>
      {pageInfo !== 0 && (
        <div className='mb-[20px] flex font-unbound text-[24px] font-bold leading-[1.16] text-main-blue-hover'>
          <span>{pageInfo}</span>
          <span>{'/'}</span>
          <span>{initialData.length}</span>
        </div>
      )}
      {pageInfo !== 0 && (
        <>
          <QuestionComponent
            data={initialData[pageInfo - 1]}
            onClick={handleBack}
            nextClick={handleNext}
          />
        </>
      )}
      {pageInfo === 0 && <StartedComponent onClick={handleNext} />}
    </div>
  );
};
