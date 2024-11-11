import React, { useState } from 'react';
import { IInitialValue } from '../briefData';

interface FormikValues {
  values: { [key: string]: string };
  errors: { [key: string]: string };
  touched: { [key: string]: boolean };
}

interface IAnotherProps {
  data: IInitialValue;
  // onChange: (idx: string, value: string) => void;
  // formik: FormikValues;
}

export const QuestionComponent = ({
  data,
  // formik,
  // onChange,
}: IAnotherProps) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const minLength = 3;
  const maxLength = 10;

  const validateInput = () => {
    if (!input) {
      setError('Поле не должно быть пустым');
    } else if (input.length < minLength) {
      setError(`Минимальное количество символов: ${minLength}`);
    } else if (input.length > maxLength) {
      setError(`Максимальное количество символов: ${maxLength}`);
    } else {
      setError('');
    }
  };

  const handleChange = (e) => {
    validateInput();
    setInput(e.target.value);
  };

  return (
    <div className='flex w-full flex-col'>
      <h2 className='mb-[40px] text-center font-unbound text-[22px] font-bold uppercase leading-[1.1] tablet:text-[28px]'>
        {data.question}
      </h2>
      <div className='flex w-full flex-col gap-[20px]'>
        {data.data.map((item, idx) => (
          <React.Fragment key={idx}>
            {item.label && (
              <label
                form={item.id}
                className='font-proxima text-[16px] text-text-dark/50'
              >
                {item.label}
              </label>
            )}
            {data.type === 'input' ? (
              <>
                <input
                  type={data.type ? data.type : 'input'}
                  required={item.required}
                  placeholder={item.placeholder}
                  id={item.id}
                  name={item.id}
                  value={input}
                  // onChange={(e) => onChange(item.id, e.target.value)}
                  onChange={handleChange}
                  className='w-full border-b-[1px] border-main-blue-hover pb-[8px] text-[16px] outline-none'
                />
                {/* {formik.errors[item.id] && formik.touched[item.id] && (
                  <div className='mt-1 text-sm text-red-500'>
                    {formik.errors[item.id]}
                  </div>
                )} */}
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </>
            ) : (
              <input
                type='button'
                value={item.answer}
                id={item.id}
                name={item.id}
                // onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                //   const target = e.target as HTMLInputElement;
                //   onChange(item.id, target.value);
                // }}
                // className={`${item.answer === formik.values[item.id] ? 'border-main-blue' : 'border-main-blue/20'} block w-full cursor-pointer rounded-[6px] border-[1px] py-[13px] duration-300 hover:border-main-blue-hover`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
