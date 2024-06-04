export interface Post {
  slug: string;
  title: string;
  image: string | undefined;
  type: string | null | undefined;
  description: string;
  date: string;
  tag: string | undefined;
}
