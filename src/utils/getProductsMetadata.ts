import fs from 'fs';
import matter from 'gray-matter';

export interface Product {
  name: string;
  image: string;
  link: string;
  slug: string;
}

export const getProductsMetadata = (basePath: string) => {
  const folder = basePath + '/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((filename): Product => {
    const fileContent = fs.readFileSync(`${basePath}/${filename}`, 'utf8');
    const matterResult = matter(fileContent);
    return {
      name: matterResult.data.name,
      image: matterResult.data.image,
      link: matterResult.data.link,
      slug: filename.replace('.md', ''),
    };
  });

  return posts;
};
