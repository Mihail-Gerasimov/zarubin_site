'use client';

import { useFormik } from 'formik';
import { StartedComponent } from './StartedComponent/StartedComponent';
import { initialData } from './briefData';
import { QuestionComponent } from './QuestionComponent/QuestionQomponent';
import { useQuestion } from '../Contexts/QuestionContext';
import { sendBrief } from '@/src/utils/sendBrief';
import { ThanksComponent } from './ThanksComponent/ThanksComponent';

export const BriefClient = () => {
  const { page: pageInfo, handleSetPage, data } = useQuestion();

  const formik = useFormik({
    initialValues: data,
    onSubmit: async (values) => {
      await sendBrief(
        values.idea,
        values.objective,
        values.obstacles,
        values.budget,
        values.name,
        values.company_name,
        values.about_business,
        values.email,
      );

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
              Name: ${values.name}\nEmail: ${values.email}\nCompany_name: ${values.company_name}\nIdea: ${values.idea}\nObjective: ${values.objective}\nObstacles: ${values.obstacles}\nBudget: ${values.budget}\nAbout_business: ${values.about_business}
            `,
          }),
        },
      ).then((r) => r.json());

      if (telegramResponse.ok) {
        handleSetPage(pageInfo + 1);
        alert('Thank you! We will contact you soon');
      } else {
        console.error('Error sending message to Telegram:', telegramResponse);
      }

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
      return;
    }
    handleSetPage(pageInfo + 1);
  };

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
      {pageInfo > initialData.length && <ThanksComponent />}
    </div>
  );
};
