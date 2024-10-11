import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb, Breadcrumbs } from '../../shared/Breadcrumbs/Breadcrumbs';

const BREADCRUMBS: Breadcrumb[] = [
  { title: 'Main', link: '/' },
  { title: 'New products' },
];

interface IProducts {
  products: { name: string; image: string; link: string; slug: string }[];
}

export const Products = ({ products }: IProducts) => {
  return (
    <div className='flex flex-col gap-[40px] tablet:gap-[60px]'>
      <div className='desktop:py-[65px]'>
        <Breadcrumbs light breadcrumbs={BREADCRUMBS} />
        <h1 className='mt-[20px] font-unbound text-[32px] font-bold uppercase leading-[1.1] text-text-dark tablet:text-[60px] desktop:text-[80px] desktop:font-black desktop-big:text-[100px]'>
          Our new products
        </h1>
        <p className='mt-[21px] font-proxima text-[16px] leading-[1.25] text-text-dark tablet:mt-[24px] tablet:text-[20px] desktop:mt-[20px]'>
          We develop our own ideas and turn them into tools
        </p>
      </div>

      <div className='grid grid-cols-1 gap-[40px] tablet:grid-cols-2'>
        {products.map((item) => (
          <Link href={item.link} key={item.name} className='overflow-hidden'>
            <Image
              key={item.name}
              src={item.image}
              alt={item.name}
              quality={80}
              width={850}
              height={448}
              className='h-[auto] w-full'
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
