import defaultImg from '@/public/assets/images/banner/default_img.webp';
import Image from 'next/image';

type PageType = { type: string | null | undefined };

const POST_TYPE = {
  MANIFESTO: 'manifesto',
  NOTES: 'notes',
  RESEARCH: 'research',
};

export const DefaultImage = ({ type }: PageType) => {
  let img = defaultImg;

  if (type?.toLowerCase() === POST_TYPE.NOTES) {
    img = defaultImg;
  } else if (type?.toLowerCase() === POST_TYPE.RESEARCH) {
    img = defaultImg;
  } else if (type?.toLowerCase() === POST_TYPE.MANIFESTO) {
    img = defaultImg;
  } else {
    img = defaultImg;
  }
  return type === '' || type === null || type === undefined ? (
    <Image
      src={img}
      alt='default logo'
      width={876}
      height={378}
      className='left-0 top-0 h-full w-full object-cover'
      quality={80}
    />
  ) : (
    <Image
      src={img}
      alt={`${type.toLowerCase()} image`}
      width={876}
      height={378}
      className='left-0 top-0 h-full w-full object-cover'
      quality={80}
    />
  );
};
