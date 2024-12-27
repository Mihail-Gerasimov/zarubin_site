import { BriefClient } from '@/src/components/BriefClient/BriefClient';
import { QuestionProvider } from '@/src/components/Contexts/QuestionContext';
import { Container } from '@/src/components/shared/Container/Container';
import { Section } from '@/src/components/shared/Section/Section';

export default function Brief() {
  return (
    <Section id='brief' light>
      <Container className='tablet:px-[40px]'>
        <QuestionProvider>
          <BriefClient />
        </QuestionProvider>
      </Container>
    </Section>
  );
}
