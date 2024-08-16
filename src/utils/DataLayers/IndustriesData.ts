import carImg from '@/public/assets/images/main/auto.webp';
import sportImg from '@/public/assets/images/main/bassketball.webp';
import cartImg from '@/public/assets/images/main/cart.webp';
import cupImg from '@/public/assets/images/main/cup.webp';
import lampImg from '@/public/assets/images/main/lamp.webp';

export const IndustriesData = [
  {
    id: 1,
    title: 'Service improvement',
    link: '/solutions?industry=service%20%26%20hospitality',
    image: lampImg,
    data: [
      { id: 1, title: 'Service improvement' },
      { id: 4, title: 'Website' },
      { id: 2, title: 'B2B Sales' },
      { id: 5, title: 'Mobile application' },
      { id: 3, title: 'Consulting' },
      { id: 6, title: 'IT Consulting' },
    ],
  },
  {
    id: 5,
    title: 'Sport  Industry',
    link: '/solutions?industry=sport%20%26%20entertainment',
    image: sportImg,
    data: [
      { id: 1, title: 'Marketing' },
      { id: 5, title: 'IT Consulting' },
      { id: 2, title: 'Communities' },
      { id: 6, title: 'Websites' },
      { id: 3, title: 'Service improvement' },
      { id: 7, title: 'Mobile applications' },
      { id: 4, title: 'B2B Sales' },
    ],
  },
  {
    id: 2,
    title: 'Media & Entertainment',
    link: '/solutions?industry=sport%20%26%20entertainment',
    image: cupImg,
    data: [
      { id: 1, title: 'Marketing' },
      { id: 4, title: 'Social network' },
      { id: 2, title: 'Communities' },
      { id: 5, title: 'Fantasy games' },
      { id: 3, title: 'Service improvement' },
      { id: 6, title: 'IT Consulting' },
    ],
  },
  {
    id: 3,
    title: 'Car industry',
    link: '/solutions?industry=automotive',
    image: carImg,
    data: [
      { id: 1, title: 'IT Consulting' },
      { id: 2, title: 'IT Audit' },
      { id: 3, title: 'Car Systems' },
      { id: 4, title: 'B2B Sales' },
    ],
  },
  {
    id: 4,
    title: 'Retail',
    link: '/solutions',
    image: cartImg,
    data: [
      { id: 1, title: 'B2C Sales' },
      { id: 2, title: 'Communities' },
      { id: 6, title: 'IT Consulting' },
      { id: 3, title: 'Service improvement' },
      { id: 4, title: 'Mobile apps' },
    ],
  },
];
