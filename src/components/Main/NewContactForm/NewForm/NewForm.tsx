'use client';

import { NextLinePreposition } from '@/src/components/NextLinePreposition/NextLinePreposition';
import { sendEmail } from '@/src/utils/sendEmail';
import { InputMask } from '@react-input/mask';
import { useFormik } from 'formik';

export const NewForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      details: '',
    },
    onSubmit: async (values, { resetForm }) => {
      await sendEmail(values.name, values.email, values.phone, values.details);
      resetForm();

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
    },
  });

  return (
    <div
      id='contact-form'
      className='w-full scroll-mt-[100px] rounded-[12px] bg-main-bg px-[20px] py-[40px] mobile-big:px-[40px] mobile-big:py-[40px] laptop-big:max-w-[1009px]'
    >
      <NextLinePreposition
        tag='h3'
        text='We are always glad to have new partners and ambitious tasks'
        className='font-unbound text-[28px] font-semibold uppercase leading-[1.25] text-white tablet:text-[38px] tablet:leading-[1.15]'
      />
      <NextLinePreposition
        tag='p'
        text='Fill out the form and click the blue button to get in touch with you!'
        className='mt-[16px] font-proxima text-[18px] font-semibold leading-[1.1] text-light-gray tablet:text-[20px] tablet:leading-[1.2] desktop:leading-[1]'
      />
      <form
        className='mt-[30px] flex flex-col gap-[20px] overflow-hidden tablet:mt-[40px] tablet:gap-[30px] desktop:mt-[32px] desktop:gap-[25px]'
        onSubmit={formik.handleSubmit}
      >
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={formik.values.name}
          required
          className='w-full resize-none rounded-[6px] border-[1px] border-white/20 bg-white/20 p-[8px_20px] font-proxima text-[18px] leading-[2.4] text-white placeholder-gray-placeholder outline-none focus:border-main-orange tablet:text-[24px] tablet:leading-[1.8] desktop:text-[26px] desktop:leading-[1.7]'
          onChange={formik.handleChange}
        />
        <input
          type='email'
          name='email'
          value={formik.values.email}
          placeholder='E-mail'
          className='w-full resize-none rounded-[6px] border-[1px] border-white/20 bg-white/20 p-[8px_20px] font-proxima text-[18px] leading-[2.4] text-white placeholder-gray-placeholder outline-none focus:border-main-orange tablet:text-[24px] tablet:leading-[1.8] desktop:text-[26px] desktop:leading-[1.7]'
          required
          onChange={formik.handleChange}
        />
        <InputMask
          type='tel'
          name='phone'
          mask='____________________'
          replacement={{
            _: /[0-9]/,
          }}
          value={formik.values.phone}
          placeholder='Phone'
          className='w-full resize-none rounded-[6px] border-[1px] border-white/20 bg-white/20 p-[8px_20px] font-proxima text-[18px] leading-[2.4] text-white placeholder-gray-placeholder outline-none focus:border-main-orange tablet:text-[24px] tablet:leading-[1.8] desktop:text-[26px] desktop:leading-[1.7]'
          required
          onChange={formik.handleChange}
        />
        <textarea
          name='details'
          value={formik.values.details}
          placeholder='Request'
          className='w-full resize-none rounded-[6px] border-[1px] border-white/20 bg-white/20 p-[8px_20px] font-proxima text-[18px] leading-[2.4] text-white placeholder-gray-placeholder outline-none focus:border-main-orange tablet:text-[24px] tablet:leading-[1.8] desktop:text-[26px] desktop:leading-[1.7]'
          rows={1}
          onChange={formik.handleChange}
          required
        />
        <button
          type='submit'
          className='w-full transform rounded-[6px] bg-main-orange px-[15px] py-[13px] text-xl font-bold text-text-dark transition duration-200 ease-in-out hover:scale-[0.99] hover:bg-main-orange-hover'
        >
          Send the request
        </button>
      </form>
    </div>
  );
};
