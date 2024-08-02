import clerkImg from '@/public/assets/images/about/clerk.png';
import cooImg from '@/public/assets/images/about/coo.png';
import designerkImg from '@/public/assets/images/about/designer.png';
import faunderImg from '@/public/assets/images/about/founder.png';
import { StaticImageData } from 'next/image';

interface ITeamData {
  id: number;
  name: string;
  job: string;
  image: StaticImageData;
}

export const TeamData: ITeamData[] = [
  { id: 1, name: 'Vitaliy Zarubin', job: 'CEO & Founder', image: faunderImg },
  { id: 2, name: 'Liza Demenkova', job: 'COO', image: cooImg },
  { id: 3, name: 'Alexa Tveritneva', job: 'Clerk', image: clerkImg },
  { id: 4, name: 'Irina Filatova', job: 'Designer', image: designerkImg },
];

export const Card = [
  { id: 1, tag: 'Mission', text: 'Only cool projects', image: '' },
  { id: 2, tag: 'Remote', text: 'We work completely remotely', image: '' },
  {
    id: 3,
    tag: 'No nonsense',
    text: 'Only full transparency in reporting and git-е',
    image: '',
  },
];
