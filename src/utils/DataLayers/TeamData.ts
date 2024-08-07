import clerkImg from '@/public/assets/images/about/team/clerk.webp';
import cooImg from '@/public/assets/images/about/team/coo.webp';
import designerkImg from '@/public/assets/images/about/team/designer.webp';
import flutterDevImg from '@/public/assets/images/about/team/flutter_developer.webp';
import faunderImg from '@/public/assets/images/about/team/founder.webp';
import frontDevImg from '@/public/assets/images/about/team/frontend_developer.webp';
import phpDevImg from '@/public/assets/images/about/team/php_developer.webp';
import phpLaravelDevImg from '@/public/assets/images/about/team/php_laravel_developer.webp';
import projectAdminImg from '@/public/assets/images/about/team/project_administrator.webp';
import projectManagerImg from '@/public/assets/images/about/team/project_manager.webp';
import salesManagerImg from '@/public/assets/images/about/team/sales_manager.webp';
import techLidJsImg from '@/public/assets/images/about/team/tech_lead_js.webp';
import uiUxDesignerImg from '@/public/assets/images/about/team/uiux_designer.webp';

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
  {
    id: 5,
    name: 'Alina Gulakova',
    job: 'UX/UI Designer',
    image: uiUxDesignerImg,
  },
  { id: 6, name: 'Kirill Zhuk', job: 'Tech Lead JS', image: techLidJsImg },
  {
    id: 7,
    name: 'Mikhail Azarenkov',
    job: 'PHP Developer',
    image: phpDevImg,
  },
  {
    id: 8,
    name: 'Vladilen Isaenya',
    job: 'Frontend Developer',
    image: frontDevImg,
  },
  {
    id: 9,
    name: 'Vadim Konev',
    job: 'Flutter Developer',
    image: flutterDevImg,
  },
  {
    id: 10,
    name: 'Alex Antonov',
    job: 'Sales Manager',
    image: salesManagerImg,
  },
  {
    id: 11,
    name: 'Danila Igoshin',
    job: 'Project Administrator',
    image: projectAdminImg,
  },
  {
    id: 12,
    name: 'Yulia Borkunova',
    job: 'Project Manager',
    image: projectManagerImg,
  },
  {
    id: 13,
    name: 'Shamil Mardanzadeh',
    job: 'Backend php laravel developer',
    image: phpLaravelDevImg,
  },
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
