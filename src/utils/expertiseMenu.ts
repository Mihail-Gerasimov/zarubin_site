import fs from 'fs';
import path from 'path';

export const formatMenuItem = (menuItem: string) => {
  const newMenuItem = menuItem
    .split('_')
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ');
  return newMenuItem;
};

export const getExpertiseList = () => {
  const folder = 'src/expertise';
  const directories = fs
    .readdirSync(folder, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const expertiseList = directories.map((directory) => {
    const files = fs
      .readdirSync(path.join(folder, directory))
      .filter((file) => file.endsWith('.md'))
      .map((file) => ({
        nameItem: file,
        link: `/${file}`,
      }));

    return {
      name: directory,
      folderItems: files,
    };
  });
  return expertiseList;
};
