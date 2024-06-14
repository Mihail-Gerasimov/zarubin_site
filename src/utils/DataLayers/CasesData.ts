export type Case = {
  id: number;
  title: string;
  tags: string[];
  industries: string[];
  link: string;
};

export const CasesData: Case[] = [
  {
    id: 1,
    title: 'Simplified interaction on shifts for employees',
    tags: ['OAZIS'],
    industries: [
      'service & hospitality',
      'service improvement',
      'custom development',
    ],
    link: '#',
  },
  {
    id: 2,
    title:
      'We conducted a technical audit and a process audit in their IT part',
    tags: ['NIS'],
    industries: [
      'oil',
      'media & entertainment',
      'business processes management',
    ],
    link: '#',
  },
  {
    id: 3,
    title: 'In three weeks, we managed to set up the work process',
    tags: ['GRIDCAPITAL'],
    industries: ['fin tech', 'retail', 'business processes management'],
    link: '#',
  },
  {
    id: 4,
    title: 'We organized the development process',
    tags: ['LUXTODAY'],
    industries: ['business', 'retail', 'custom development'],
    link: '#',
  },
  {
    id: 5,
    title:
      'What if we looked at footballers as a stock and combined them into a portfolio?',
    tags: ['STOCKS.SOCCER'],
    industries: ['fantasy game', 'sport', 'custom development'],
    link: '#',
  },
  {
    id: 6,
    title:
      'a mobile application that is installed on the steering wheel of a car',
    tags: ['KAMAATOM'],
    industries: ['service improvement', 'car industry', 'custom development'],
    link: '#',
  },
];
