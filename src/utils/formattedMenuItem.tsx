export const formatMenuItem = (menuItem: string) => {
  const newMenuItem = menuItem
    .split('-')
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ');
  return newMenuItem;
};

export const formatMenuTitle = (menuItem: string) => {
  const newMenuItem = menuItem
    .split('_')
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ');
  return newMenuItem;
};

export const formatLink = (str: string) => {
  const splitStr = str.split('.');
  return splitStr[0];
};
