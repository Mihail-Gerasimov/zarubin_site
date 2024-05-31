export interface Post {
  slug: string;
  title: string;
  image: string | undefined;
  description: string;
  date: string;
  tag: string | undefined;
}
