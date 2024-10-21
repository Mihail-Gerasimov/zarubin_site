import { NextLinePreposition } from '../../NextLinePreposition/NextLinePreposition';
import { ContractFormTemplate } from '../../shared/ContactFormTemplate/ContractFormTemplate';
import { Form } from './Form/Form';

export const ContactForm = () => {
  return (
    <ContractFormTemplate
      title={
        <NextLinePreposition
          tag='h2'
          text=' We are always glad to have new partners and ambitious tasks.'
          className='font-unbound text-[32px] font-bold uppercase leading-[1.11] text-slate-900 tablet:text-[50px] desktop-hard:text-[70px]'
        />
      }
    >
      <Form />
    </ContractFormTemplate>
  );
};
