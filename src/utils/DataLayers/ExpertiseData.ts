import expertise1 from '@/public/assets/images/main/analytic.webp';
import expertise2 from '@/public/assets/images/main/consulting.webp';

export const ExpertiseData = [
  {
    id: 1,
    title: 'System analytics',
    link: '/expertise#custom',
    image: expertise1,
    data: [
      { id: 1, title: 'System integration', link: '/expertise#integration' },
      {
        id: 2,
        title: 'Creating a scalable architecture',
        link: '/expertise#architecture',
      },
      { id: 3, title: 'Custom development', link: '/expertise#custom' },
    ],
  },
  {
    id: 2,
    title: 'IT consulting',
    link: '/expertise#vco',
    image: expertise2,
    data: [
      { id: 1, title: 'vCIO', link: '/expertise#vco' },
      {
        id: 2,
        title: 'Creating and configuring business processes',
        link: '/expertise#business-process',
      },
      {
        id: 3,
        title: 'Completing projects',
        link: '/expertise#risk-managment',
      },
    ],
  },
];
