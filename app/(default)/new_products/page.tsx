import { ContactForm } from '@/src/components/Main/ContactForm/ContactForm';
import { Products } from '@/src/components/NewProducts/Products/Products';
import { Container } from '@/src/components/shared/Container/Container';
import { Section } from '@/src/components/shared/Section/Section';
import { getProductsMetadata } from '@/src/utils/getProductsMetadata';

const products = getProductsMetadata('src/products');

export default function NewProductsPage() {
  return (
    <main className='flex flex-col overflow-hidden bg-white'>
      <Section id='hero' light className='desktop:py-[60px]'>
        <Container>
          <Products products={products} />
        </Container>
      </Section>
      <Section
        id='contacts'
        className='py-[80px] tablet:py-[80px] desktop:py-[80px]'
        light
      >
        <Container>
          <ContactForm />
        </Container>
      </Section>
    </main>
  );
}
