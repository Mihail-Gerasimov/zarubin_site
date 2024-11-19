import fs from 'fs';
import matter from 'gray-matter';

export interface Product {
  name: string;
  image: string;
  link: string;
  date: string;
  open: boolean;
  slug: string;
}

const ProductsPath = 'src/products';

export const getProductsMetadata = () => {
  const folder = ProductsPath + '/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((filename): Product => {
    const fileContent = fs.readFileSync(`${ProductsPath}/${filename}`, 'utf8');
    const matterResult = matter(fileContent);
    return {
      name: matterResult.data.name,
      image: matterResult.data.image,
      link: matterResult.data.link,
      date: matterResult.data.date,
      open: matterResult.data.open,
      slug: filename.replace('.md', ''),
    };
  });

  return posts;
};
