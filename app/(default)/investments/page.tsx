import { ContactForm } from '@/src/components/Main/ContactForm/ContactForm';
import { Products } from '@/src/components/NewProducts/Products/Products';
import { Container } from '@/src/components/shared/Container/Container';
import { Section } from '@/src/components/shared/Section/Section';
import { BASE_URL } from '@/src/utils/alias';
import { getProductsMetadata } from '@/src/utils/getProductsMetadata';
import { openGraphImage } from '@/src/utils/openGraphParams';
import { pageMetadata } from '@/src/utils/pageMetadata';
import { Metadata } from 'next';

const products = getProductsMetadata('src/products');

const title = pageMetadata.investments.title;
const description = pageMetadata.investments.title;
const keywords = pageMetadata.investments.keywords;

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: '/assets/images/info/main_meta.png',
  },
  alternates: {
    canonical: new URL(`${BASE_URL}/our_products`),
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'BrightByte.com',
    ...openGraphImage,
    title,
    description,
    url: `${BASE_URL}/our_products`,
  },
  keywords,
};

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
