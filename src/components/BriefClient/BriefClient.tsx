'use client';

import { useFormik } from 'formik';
import { useState } from 'react';
import { StartedComponent } from './StartedComponent/StartedComponent';
import { NextBackButton } from './NextBackButton/NextBackButton';
import { QuestionComponent } from './QuestionComponent/QuestionComponent';
import { initialData, initialFormikValue } from './briefData';
import { validate } from '@/src/utils/validate/validate';
import { TestQuestionComponent } from './QuestionComponent/TestQuestionQomponent';

export const BriefClient = () => {
  const [step, setStep] = useState(0);

  const formik = useFormik({
    initialValues: initialFormikValue,
    validate,
    onSubmit: (values) => {
      console.log('FORMDATA', values);
    },
  });

  const handleBack = () => {
    if (step === 0) return;
    setStep(step - 1);
  };

  const handleNext = () => {
    if (step === initialData.length) {
      return formik.handleSubmit();
    }
    setStep(step + 1);
  };

  const handleChange = (id: string, value: string) => {
    console.log('ID', id);
    formik.setFieldValue(id, value);
  };

  return (
    <div className='mx-[auto] flex w-full max-w-[860px] flex-col items-center desktop:text-[28px] desktop:leading-[1.14]'>
      {step !== 0 && (
        <div className='mb-[20px] flex font-unbound text-[24px] font-bold leading-[1.16] text-main-blue-hover'>
          <span>{step}</span>
          <span>{'/'}</span>
          <span>{initialData.length}</span>
        </div>
      )}
      {step !== 0 && (
        <>
          <TestQuestionComponent
            data={initialData[step - 1]}
            onChange={handleChange}
          />
        </>
      )}
      {step === 0 && <StartedComponent />}
      <NextBackButton
        step={step}
        nextClick={handleNext}
        backClick={handleBack}
      />
    </div>
  );
};
