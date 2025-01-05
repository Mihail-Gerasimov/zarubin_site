import { NewContactForm } from '@/src/components/Main/NewContactForm/NewContactForm';
import { NewExpertise } from '@/src/components/Main/NewExpertise/NewExpertise';
import { NewFeedback } from '@/src/components/Main/NewFeedback/NewFeedback';
import { NewHero } from '@/src/components/Main/NewHero/NewHero';
import { NewInsights } from '@/src/components/Main/NewInsights/NewInsights';
import { Container } from '@/src/components/shared/Container/Container';
import { Section } from '@/src/components/shared/Section/Section';
import { mainIcons } from '@/src/utils/DataLayers/MainIcons';
import { getExpertiseAreasMetadata } from '@/src/utils/getExpertiseAreasMetadata';

const data = getExpertiseAreasMetadata();

export default function MainPage() {
  return (
    <div className='flex flex-col'>
      <NewHero icons={mainIcons} />
      <NewExpertise data={data} />
      <NewInsights />
      <Section>
        <NewFeedback />
      </Section>
      <Section light>
        <Container className=''>
          <NewContactForm />
        </Container>
      </Section>
    </div>
  );
}
