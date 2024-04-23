import Link from 'next/link';

interface Data {
  title: string;
  prep_time: string;
  cook_time: string;
  bio: string;
  slug: string;
}

interface Props {
  post: Data;
}

export const BlogCard = ({ post }: Props) => {
  return (
    <Link
      href={`blog/${post.slug}`}
      className='p-[10px] w-fit flex rounded-[20px] border-solid border-[1px] border-gray-200'
    >
      <div className=''>
        <h3 className=''>{post.title}</h3>
        <p>{post.bio}</p>
        <div>
          <div>
            <h5>Prep Time</h5>
            <p>{post.prep_time}</p>
          </div>
          <div>
            <h5>Cook Time</h5>
            <p>{post.cook_time}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
