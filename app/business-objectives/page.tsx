import { Hero } from '@/src/components/BusinessObjectives/Hero/Hero';
import { Container } from '@/src/components/shared/Container/Container';
import { Section } from '@/src/components/shared/Section/Section';

export default async function BusinessObjectivesPage() {
  return (
    <main className='flex flex-col gap-20 overflow-hidden'>
      <Section id='hero' className='relative'>
        <Container>
          <Hero />
        </Container>
      </Section>
    </main>
  );
}
