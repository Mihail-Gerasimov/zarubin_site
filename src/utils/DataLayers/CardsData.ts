import missionImg from '@/public/assets/images/about/card_mission.png';
import nonesenseImg from '@/public/assets/images/about/card_nonsense.png';
import remoteImg from '@/public/assets/images/about/card_remote.png';
import { StaticImageData } from 'next/image';

interface ICard {
  id: number;
  tag: string;
  title: string;
  image: StaticImageData;
}

export const CardsData: ICard[] = [
  { id: 1, tag: 'Mission', title: 'Only cool projects', image: missionImg },
  {
    id: 2,
    tag: 'Remote',
    title: 'We work completely remotely',
    image: remoteImg,
  },
  {
    id: 3,
    tag: 'No nonsense',
    title: 'Only full transparency in reporting and git-е',
    image: nonesenseImg,
  },
];
