export interface Post {
  slug: string;
  title: string;
  description: string;
  image: string | undefined;
  category: string;
  subCategory: string | null | undefined;
  date: string;
  tag: string | undefined;
  readingTime: string | null | undefined;
  authorName: string;
  authorImage: string;
  downloadLink?: string | undefined;
}

export interface IImage {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

export interface IFeedback {
  id: number;
  name: string;
  job: string;
  image: IImage;
  feedback: string;
  logo: IImage;
  date: string;
}
