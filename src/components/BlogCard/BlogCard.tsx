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
    <Link href={`blog/${post.slug}`}>
      <div>
        <h3>{post.title}</h3>
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
