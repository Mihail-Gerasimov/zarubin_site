import defaultImg from '@/public/assets/images/banner/default_logo.png';
import noteDefaultImg from '@/public/assets/images/post/note/notes_default.png';
import researchDefaultImg from '@/public/assets/images/post/research/reseadch_default.png';
import Image from 'next/image';

type PageType = { type: string | null | undefined };

const POST_TYPE = {
  MANIFESTO: 'manifesto',
  NOTES: 'notes',
  RESEARCH: 'research',
};

export const DefaultImage = ({ type }: PageType) => {
  let img;

  if (type?.toLowerCase() === POST_TYPE.NOTES) {
    img = noteDefaultImg;
  } else if (type?.toLowerCase() === POST_TYPE.RESEARCH) {
    img = researchDefaultImg;
  } else if (type?.toLowerCase() === POST_TYPE.MANIFESTO) {
    img = defaultImg;
  } else {
    img = defaultImg;
  }
  return type === POST_TYPE.MANIFESTO || type === null || type === undefined ? (
    <Image
      src={img}
      alt=''
      width={300}
      height={150}
      className='absolute right-[50%] top-[50%] h-[102px] w-[auto] translate-x-[50%] translate-y-[-50%] tablet:h-[173px]'
      unoptimized
    />
  ) : (
    <Image
      src={img}
      alt=''
      width={300}
      height={150}
      className='left-0 top-0 h-full w-full object-cover'
      unoptimized
    />
  );
};
