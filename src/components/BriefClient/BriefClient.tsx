'use client';

import { useFormik } from 'formik';
import { StartedComponent } from './StartedComponent/StartedComponent';
// import { NextBackButton } from './NextBackButton/NextBackButton';
import { initialData } from './briefData';
import { QuestionComponent } from './QuestionComponent/QuestionQomponent';
import { useQuestion } from '../Contexts/QuestionContext';
import { useRouter } from 'next/navigation';

export const BriefClient = () => {
  const router = useRouter();
  const { page: pageInfo, handleSetPage, data } = useQuestion();

  const formik = useFormik({
    initialValues: data,
    onSubmit: async (values, { resetForm }) => {
      console.log('FORMDATA', values);
      // router.push(
      //   'https://cal.com/vitaliyzarubin/30-minutes-meeting?date=2024-11-14&month=2024-11',
      // );
      window.open(
        'https://cal.com/vitaliyzarubin/30-minutes-meeting?date=2024-11-14&month=2024-11',
        '_blank',
      );
    },
  });

  const handleBack = () => {
    if (pageInfo === 0) return;
    handleSetPage(pageInfo - 1);
  };

  const handleNext = () => {
    if (pageInfo === initialData.length) {
      formik.handleSubmit();
      // return;
    }
    handleSetPage(pageInfo + 1);
  };

  // const handleChange = (id: string, value: string) => {
  //   console.log('ID', id);
  //   formik.setFieldValue(id, value);
  // };

  return (
    <div className='mx-[auto] flex w-full max-w-[860px] flex-col items-center desktop:text-[28px] desktop:leading-[1.14]'>
      {pageInfo !== 0 && pageInfo <= initialData.length && (
        <div className='mb-[20px] flex font-unbound text-[24px] font-bold leading-[1.16] text-main-blue-hover'>
          <span>{pageInfo}</span>
          <span>{'/'}</span>
          <span>{initialData.length}</span>
        </div>
      )}
      {pageInfo !== 0 && pageInfo <= initialData.length && (
        <>
          <QuestionComponent
            data={initialData[pageInfo - 1]}
            onClick={handleBack}
            nextClick={handleNext}
          />
        </>
      )}
      {pageInfo === 0 && <StartedComponent onClick={handleNext} />}
      {pageInfo > initialData.length && <div>thanks</div>}
    </div>
  );
};
