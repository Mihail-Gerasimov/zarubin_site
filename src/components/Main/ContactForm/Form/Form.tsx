'use client';

import { InputMask } from '@react-input/mask';
import { useFormik } from 'formik';

console.log(process.env);

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

      await fetch('https://wild-term-a5e5.access-f8d.workers.dev/', {
        method: 'POST',
        body: formData,
      }).then((r) => r.json());

      // if (response.error) {
      //   console.error('Error sending form data:', response);
      // }
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
    <div className='w-full rounded-[12px] bg-[--second-blue] p-[40px]'>
      <div className='font-unbound text-[32px] font-semibold leading-[37px] text-white'>
        Fill out the form and click the blue button to get in touch with you!
      </div>
      <form
        className='mt-[49px] flex-col space-y-[45px] overflow-hidden'
        onSubmit={formik.handleSubmit}
      >
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={formik.values.name}
          required
          className='w-full resize-none border-b border-blue-600 bg-transparent pb-2 text-2xl text-white placeholder-opacity-50 outline-none focus:bg-blue-950'
          onChange={formik.handleChange}
        />
        <input
          type='email'
          name='email'
          value={formik.values.email}
          placeholder='E-mail'
          className='w-full resize-none border-b border-blue-600 bg-transparent pb-2 text-2xl text-white placeholder-opacity-50 outline-none focus:bg-blue-950'
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
          className='w-full resize-none border-b border-blue-600 bg-transparent pb-2 text-2xl text-white placeholder-opacity-50 outline-none focus:bg-blue-950'
          required
          onChange={formik.handleChange}
        />
        <textarea
          name='details'
          value={formik.values.details}
          placeholder='Project details'
          className='w-full resize-none border-b border-blue-600 bg-transparent pb-2 text-2xl text-white placeholder-opacity-50 outline-none focus:bg-blue-950'
          onChange={formik.handleChange}
          required
        />
        <button
          type='submit'
          className='w-full transform rounded-[6px] bg-blue-700 px-[15px] py-[13px] text-xl font-bold text-white transition duration-200 ease-in-out hover:scale-[0.99] hover:bg-blue-500'
        >
          Blue button
        </button>
      </form>
    </div>
  );
};
