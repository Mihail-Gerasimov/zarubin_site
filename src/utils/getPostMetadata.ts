import fs from 'fs';
import matter from 'gray-matter';
import { Post } from './types';

export const getPostMetadata = (basePath: string) => {
  const folder = basePath + '/';
  if (!fs.existsSync(basePath)) {
    console.warn(`Directory ${basePath} does not exist.`);
    return [];
  }
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((filename): Post => {
    const fileContent = fs.readFileSync(`${basePath}/${filename}`, 'utf8');
    const matterResult = matter(fileContent);
    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      image: matterResult.data.image,
      slug: filename.replace('.md', ''),
      date: matterResult.data.date,
      tag: matterResult.data.tag,
      authorName: matterResult.data.authorName,
      authorImage: matterResult.data.authorImage,
      downloadLink: matterResult.data.downloadLink,
      readingTime: matterResult.data.readingTime,
      category: matterResult.data.category,
      subCategory: matterResult.data.subCategory,
    };
  });

  return posts;
};
