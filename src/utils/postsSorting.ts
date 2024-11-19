import { DateTime } from 'luxon';

interface Post {
  title: string;
  description: string;
  readingTime: string | null | undefined;
  image: string | undefined;
  category: string;
  subCategory: string | null | undefined;
  slug: string;
  date: string;
  tag: string | undefined;
  authorName: string;
  authorImage: string;
  downloadLink?: string | undefined;
}

export const postsSorting = (posts: Post[]) => {
  const sortedPosts = posts.sort((a, b) => {
    const dateA = DateTime.fromFormat(a.date, 'dd-MM-yyyy');
    const dateB = DateTime.fromFormat(b.date, 'dd-MM-yyyy');
    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;
    return 0;
  });

  return sortedPosts;
};
