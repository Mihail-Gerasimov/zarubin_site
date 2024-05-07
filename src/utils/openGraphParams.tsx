import { BASE_URL } from './alias';

const url = process.env.NODE_ENV !== 'development' ? '' : BASE_URL;

export const openGraphImage = {
  images: [`${url}assets/images/icons/favicon.svg`],
};
