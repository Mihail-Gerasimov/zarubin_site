import { DateTime } from 'luxon';
import Image from 'next/image';
import { Breadcrumb, Breadcrumbs } from '../../shared/Breadcrumbs/Breadcrumbs';

const BREADCRUMBS: Breadcrumb[] = [
  { title: 'Main', link: '/' },
  { title: 'Investments' },
];

interface IProducts {
  products: {
    name: string;
    image: string;
    link: string;
    slug: string;
    date: string;
  }[];
}

export const Products = ({ products }: IProducts) => {
  const sortedProducts = [...products].sort(
    (a, b) =>
      DateTime.fromFormat(b.date, 'dd-MM-yyyy').toMillis() -
      DateTime.fromFormat(a.date, 'dd-MM-yyyy').toMillis(),
  );

  return (
    <div className='flex flex-col gap-[40px] tablet:gap-[60px]'>
      <div className='desktop:py-[65px]'>
        <Breadcrumbs light breadcrumbs={BREADCRUMBS} />
        <h1 className='mt-[20px] font-unbound text-[32px] font-bold uppercase leading-[1.1] text-text-dark tablet:text-[60px] desktop:text-[80px] desktop:font-black desktop-big:text-[100px]'>
          Investments
        </h1>
        <p className='mt-[21px] font-proxima text-[16px] leading-[1.25] text-text-dark tablet:mt-[24px] tablet:text-[20px] desktop:mt-[20px]'>
          At Bright Byte, our portfolio includes innovative projects in sports
          and niche industries, crafted in collaboration with top companies and
          forward-thinking investors. From Miami to Luxembourg and San Marino,
          our initiatives are driving progress and community growth. Every
          project we undertake is focused on creating value and fostering a
          positive societal impact.
        </p>
      </div>
      <div className='grid grid-cols-1 gap-[40px] tablet:grid-cols-2'>
        {sortedProducts.map((item) => (
          <a
            href={item.link}
            rel='noopener'
            target='_blank'
            key={item.name}
            className='overflow-hidden'
          >
            <Image
              key={item.name}
              src={item.image}
              alt={item.name}
              quality={80}
              width={850}
              height={448}
              className='h-[auto] w-full'
            />
          </a>
        ))}
      </div>
    </div>
  );
};
