export interface Post {
  slug: string;
  title: string;
  image: string | undefined;
  type: string | null | undefined;
  description: string;
  date: string;
  tag: string | undefined;
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
