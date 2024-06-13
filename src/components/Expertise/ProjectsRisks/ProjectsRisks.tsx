import { DescriptionContent } from '@/src/ui-kit/DescriptionContent/DescriptionContent';
import { TitleContent } from '@/src/ui-kit/TitleContent/TitleContent';
import { ComponentContainer } from '../../ComponentContainer/ComponentContainer';
import { ProjectRiskImg } from './ProjectRiskImg/ProjectRiskImg';

const tags = [
  'Early risk identification',
  'Loss minimization',
  'Successful project completion',
  'Improved company reputation',
];

const description = {
  descr1:
    'Project Risk Management identifies and mitigates potential issues early on, reducing the likelihood of failures and minimizing losses, leading to successful project completion on time and within budget.',
  descr2:
    "Effective Project Risk Management is key to the successful implementation of your IT initiatives. Our specialists will help you identify potential risks in the early stages of a project, develop a mitigation plan, and manage arising issues. This reduces the likelihood of unexpected costs and delays, ensuring projects are completed on time and within budget. Successful risk management improves your company's reputation and strengthens client trust.",
};

export const ProjectsRisks = () => {
  return (
    <ComponentContainer>
      <TitleContent title='Projects Risks Management' tags={tags} />
      <div className='flex flex-col gap-[20px]'>
        <DescriptionContent
          description={description.descr1}
          subDescription={description.descr2}
        />

        <ProjectRiskImg />
      </div>
    </ComponentContainer>
  );
};
