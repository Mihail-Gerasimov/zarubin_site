import { ContractFormTemplate } from '../../shared/ContactFormTemplate/ContractFormTemplate';
import { Form } from './Form/Form';

export const ContactForm = () => {
  return (
    <ContractFormTemplate
      title={
        <h2 className='font-unbound text-[32px] font-bold uppercase leading-[1.11] text-slate-900 tablet:text-[50px] desktop-big:text-[70px]'>
          We are always glad to have new partners and ambitious tasks.
        </h2>
      }
    >
      <Form />
    </ContractFormTemplate>
  );
};
