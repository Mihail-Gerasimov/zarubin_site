import React from 'react';
import { generateNewInitialValue, IInitialValue } from '../briefData';
import { useFormik } from 'formik';
import { validate } from '@/src/utils/validate/validate';

interface FormikValues {
  values: { [key: string]: string };
  errors: { [key: string]: string };
  touched: { [key: string]: boolean };
}

interface IAnotherProps {
  data: IInitialValue;
  onChange: (idx: string, value: string) => void;
}

export const TestQuestionComponent = ({ data, onChange }: IAnotherProps) => {
  const initialValues = generateNewInitialValue(data);

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
    enableReinitialize: true,
  });

  const handleChange = (id: string, value: string) => {
    formik.setFieldValue(id, value);
    formik.setFieldTouched(id, true);
  };

  return (
    <form className='flex w-full flex-col'>
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
              <div>
                <input
                  type={data.type ? data.type : 'input'}
                  required={item.required}
                  placeholder={item.placeholder}
                  id={item.id}
                  name={item.id}
                  value={formik.values[item.id]}
                  onChange={(e) => {
                    console.log(item.id);
                    handleChange(item.id, e.target.value);
                  }}
                  className='w-full border-b-[1px] border-main-blue-hover pb-[8px] text-[16px] outline-none'
                />
                {formik.errors[item.id] && formik.touched[item.id] && (
                  <div className='mt-1 text-[10px] text-red-500'>
                    {formik.errors[item.id]}
                  </div>
                )}
              </div>
            ) : (
              <input
                type='button'
                id={item.id}
                name={item.id}
                value={item.answer}
                onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                  const target = e.target as HTMLInputElement;
                  handleChange(item.id, target.value);
                }}
                className={`${item.answer === formik.values[item.id] ? 'border-main-blue' : 'border-main-blue/20'} block w-full cursor-pointer rounded-[6px] border-[1px] py-[13px] duration-300 hover:border-main-blue-hover`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </form>
  );
};
