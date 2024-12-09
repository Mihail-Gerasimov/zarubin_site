import { Section } from '@/src/components/shared/Section/Section';

export default function PlaybookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Section
      id='playbook'
      light
      className='relative z-0 px-[10px] tablet:px-[40px] desktop:p-0 desktop:px-[40px]'
    >
      {children}
    </Section>
  );
}
